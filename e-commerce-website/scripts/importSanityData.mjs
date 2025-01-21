import { createClient } from '@sanity/client';
import axios from 'axios';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';
import slugify from 'slugify';

// Load environment variables from .env.local
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// Create Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2021-08-31',
});

/**
 * Upload an image to Sanity from a URL.
 * @param {string} imageUrl - The image URL.
 * @returns {Promise<string|null>} - Image asset ID or null on failure.
 */
async function uploadImageToSanity(imageUrl) {
  try {
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data);
    const asset = await client.assets.upload('image', buffer, {
      filename: imageUrl.split('/').pop(),
    });
    console.log(`✅ Image uploaded: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error(`❌ Image upload failed for ${imageUrl}:`, error.message);
    return null;
  }
}

/**
 * Create or fetch a category in Sanity.
 * @param {Object} category - The category object.
 * @param {number} counter - Counter for unique IDs.
 * @returns {Promise<string|null>} - Category ID or null on failure.
 */
async function createCategory(category, counter) {
  try {
    const categoryExist = await client.fetch(
      `*[_type=="category" && slug.current==$slug][0]`,
      { slug: category.slug }
    );

    if (categoryExist) {
      return categoryExist._id;
    }

    const catObj = {
      _type: "category",
      _id: `${category.slug}-${counter}`,
      name: category.name,
      slug: {
        _type: "slug",
        current: category.slug,
      },
    };

    const response = await client.createOrReplace(catObj);

    console.log('✅ Category created successfully:', response);
    return response._id;
  } catch (error) {
    console.error('❌ Failed to create category:', category.name, error);
    return null;
  }
}

/**
 * Import data into Sanity.
 */
async function importData() {
  try {
    const response = await axios.get('https://hackathon-apis.vercel.app/api/products');
    const products = response.data;

    console.log(`✅ Fetched ${products.length} products from API.`);

    let counter = 1;

    for (const product of products) {
      console.log(`🔄 Processing product: ${product.name}`);
      let imageRef = null;
      let catRef = null;

      // Upload image
      if (product.image) {
        imageRef = await uploadImageToSanity(product.image);
      }

      // Create or fetch category
      if (product.category && product.category.name) {
        catRef = await createCategory(product.category, counter);
      }

      const sanityProduct = {
        _id: `product-${counter}`, // Prefix the ID to ensure validity
        _type: 'product',
        name: product.name,
        slug: {
          _type: 'slug',
          current: slugify(product.name || 'default-product', {
            lower: true, // Ensure the slug is lowercase
            strict: true, // Remove special characters
          }),
        },
        price: product.price,
        category: catRef
          ? { _type: 'reference', _ref: catRef }
          : undefined,
        tags: product.tags || [],
        quantity: 50,
        image: imageRef
          ? {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: imageRef,
              },
            }
          : undefined,
        description:
          product.description ||
          "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.",
        features: product.features || [
          "Premium material",
          "Handmade upholstery",
          "Quality timeless classic",
        ],
        dimensions: product.dimensions || {
          _type: 'dimensions', // Custom object type for dimensions
          height: "110cm",
          width: "75cm",
          depth: "50cm",
        },
      };

      counter++;
      console.log('Uploading product:', sanityProduct);

      // Import data into Sanity
      await client.createOrReplace(sanityProduct);
      console.log(`✅ Imported product: ${sanityProduct.name}`);
    }

    console.log('✅ Data import completed!');
  } catch (error) {
    console.error('❌ Error importing data:', error);
  }
}

importData();
