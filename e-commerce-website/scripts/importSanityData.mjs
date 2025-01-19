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

      // Upload image
      if (product.image) {
        imageRef = await uploadImageToSanity(product.image);
      }

      // Prepare the product object
      const sanityProduct = {
        _id: `product-${counter}`,
        _type: 'product',
        name: product.name,
        slug: {
          _type: 'slug',
          current: slugify(product.name || 'default-product', {
            lower: true,
            strict: true,
          }),
        },
        price: product.price,
        category: product.category
          ? { _type: 'reference', _ref: slugify(product.category.name, { lower: true, strict: true }) }
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
        description: product.description || 'Default product description.',
        features: product.features || ['Feature 1', 'Feature 2', 'Feature 3'],
        dimensions: product.dimensions || { height: '100cm', width: '50cm', depth: '30cm' },
      };

      console.log('📤 Uploading to Sanity:', sanityProduct.name);

      // Upload product
      await client.createOrReplace(sanityProduct);
      console.log(`✅ Product uploaded: ${sanityProduct.name}`);

      counter++;
    }

    console.log('🎉 All products imported successfully!');
  } catch (error) {
    console.error('❌ Error during data import:', error.message);
  }
}

importData();
