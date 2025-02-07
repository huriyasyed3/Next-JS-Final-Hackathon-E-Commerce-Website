'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
}

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    console.log('Stored Wishlist:', storedWishlist); 
    setWishlist(storedWishlist);
  }, []);

  const handleRemove = (product: Product) => {
    const newWishlist = wishlist.filter((item) => item.id !== product.id);
    setWishlist(newWishlist);
    localStorage.setItem("wishlist", JSON.stringify(newWishlist));
  };

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-[#2A254B]">
        Your Wishlist
      </h1>

      {wishlist.length === 0 ? (
        <p className="text-center text-gray-600">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {wishlist.map((product) => (
            <div key={product.id} className="border rounded-lg p-4 shadow-md">
              <Link href={`/ProductDetailPage/${product.id}`}>
                <div className="relative w-full h-40">
                  <Image
                    src={product.imageUrl }
                    alt={product.name || "Product Image"}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </Link>
              <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
              <p className="text-gray-700">Price: €{product.price}</p>
              <Button
                className="mt-2 bg-red-500 text-white hover:bg-red-400"
                onClick={() => handleRemove(product)}
              >
                Remove
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
