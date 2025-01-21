'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';

// Define the Product interface
interface Product {
  category: string | null;
  name: string;
  price: number;
  slug: string;
  imageUrl: string | null;
}

// Main CategoryPage component
export default function CategoryPage({ categoryName }: { categoryName: string }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const query = `*[_type == "product"]{
        "imageUrl": image.asset->url,
        price,
        "slug": slug.current,
        name,
        "category": category->name // Resolve category reference
      }`;

      try {
        const products: Product[] = await client.fetch(query);
        console.log('Fetched products:', products); // Debugging
        setProducts(products);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h1 className="text-4xl font-extrabold mb-8 text-center tracking-wide text-[#2A254B]">
        {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products
          .filter((product) => product.category === categoryName)
          .map((product) => (
            <div
              key={product.slug}
              className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300"
            >
              <Link href={`/products/${product.slug}`}>
                <div className="relative w-full h-48">
                  <Image
                    src={product.imageUrl || '/placeholder-image.png'}
                    alt={product.name || 'Product Image'}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </Link>
              <div className="p-4">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-700 mt-2">Price: €{product.price}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

