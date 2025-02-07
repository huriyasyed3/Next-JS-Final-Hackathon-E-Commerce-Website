'use client'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { Product } from "../../../../types/product";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Button } from "@/components/ui/button";
import NewCramics from "@/components/NewCramics";
import Brand from "@/components/brand";
import JoinClub from "@/components/join-club";
import Link from "next/link";
import ReviewsAndRatings from "@/components/Reviews&Ratings";

const Page = ({ params: { id } }: { params: { id: string } }) => {
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const query = `*[_type == "product" && _id == $id]{
          name,
          price,
          description,
          category->{ name },
          dimensions,
          quantity,
          features,
          "image": image.asset._ref,
          "id": _id
      }[0]`;
      const data = await client.fetch(query, { id });
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <h1 className="text-2xl font-semibold text-gray-600">Product not found!</h1>
      </div>
    );
  }

  const handleAddToCart = (product: Product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedCart = [...existingCart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    router.push('/CartComponent');
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <Image key={product.id} src={urlFor(product.image).url()} alt={product.name} width={400} height={400} className="rounded-lg shadow-lg object-cover md:mr-28" />
          </div>
          <div className="space-y-6">
            <h1 className="md:text-5xl text-3xl font-extrabold text-purple-900">{product.name}</h1>
            <p className="text-gray-600 text-lg font-bold">{product.description}</p>
            <p className="text-2xl font-bold text-gray-900">Price: <span className="text-green-600">${product.price}</span></p>
            {product.category?.name && <p className="text-gray-700"><strong>Category:</strong> {product.category.name}</p>}
            <div>
              <h2 className="text-lg font-bold text-gray-800">Dimensions:</h2>
              <p className="text-gray-700"><strong>🪑 Height:</strong> {product.dimensions?.height} cm</p>
              <p className="text-gray-700"><strong>📏 Width:</strong> {product.dimensions?.width} cm</p>
              <p className="text-gray-700"><strong>📐 Depth:</strong> {product.dimensions?.depth} cm</p>
            </div>
            <p className="text-gray-700"><strong>In Stock:</strong> {product.quantity > 0 ? product.quantity : "Out of Stock"}</p>
            <div>
              <h2 className="text-lg font-bold text-gray-800">Features:</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {product.features?.map((feature:string, index:number) => <li key={index}>{feature}</li>)}
              </ul>
            </div>
            <div className="flex gap-4 mt-4">
              <Button className="bg-gradient-to-r from-purple-900 to-purple-500 hover:scale-110 text-white px-6 py-3 rounded-full text-lg font-semibold shadow hover:bg-blue-600 transition duration-200" onClick={() => handleAddToCart(product)}>
                Add to Cart
              </Button>
              <Link href={'/checkout'}>
                <Button className="bg-yellow-500 hover:bg-yellow-300 hover:text-black text-white px-6 py-3 rounded-full text-lg font-semibold shadow hover:scale-110 transition duration-200">
                  Buy Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <NewCramics />
      <Brand />
      <JoinClub />
      <ReviewsAndRatings />
    </div>
  );
};

export default Page;
