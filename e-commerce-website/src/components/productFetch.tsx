'use client'
import { client } from '@/sanity/lib/client';
import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';

type Category = {
  name: string;
};
// Define the Product type
type Product = {
  name: string;
  price: number;
  description: string;
  imageUrl?: string;
  category?: Category;
};

const ProductsFetch : React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await client.fetch<Product[]>(
          `*[_type == "product"]{
            name,
            price,
            description,
            "imageUrl": image.asset->url,
             category->{
              name
            }
          }`
          
        );
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.length > 0 ? (
          products.map((product, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105"
            >
              {product.imageUrl && (
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
              )}
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {product.name}
                
              </h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-lg font-bold text-gray-800">
                ${product.price.toFixed(2)}
              </p>
              {product.category && (
                <p className="text-sm text-gray-600">
                 <span className='font-bold'> Category:</span> {product.category.name}
                </p>
                )}
              <Button className='bg-blue-400 text-white mt-2'
              >
                Add to cart
              </Button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-3">
            Loading products...
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductsFetch;
