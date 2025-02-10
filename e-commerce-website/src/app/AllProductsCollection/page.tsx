'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { client } from '@/sanity/lib/client';
import { useRouter } from 'next/navigation';
import { FiHeart } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import allProductImg from '../../../public/Product.png';

// ✅ Dynamic Imports
const SearchAndFilter = dynamic(() => import('@/components/SearchAndFilter'));
const LoadingComponent = dynamic(() => import('@/components/ui/LoadingAnimation'));
const Pagination = dynamic(() => import('@/components/Pagination'));
const ReviewsAndRatings = dynamic(() => import('@/components/Reviews&Ratings'));

interface Product {
  id: string;
  category: string;
  name: string;
  price: number;
  slug?: string;
  imageUrl: string;
}

export default function ProductsFetchPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [wishlist, setWishList] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const router = useRouter();

  // ✅ Fetch Products from Sanity API
  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "product"]{
        "id": _id,
        "imageUrl": image.asset->url,
        price,
        "slug": slug.current,
        name,
        "category": coalesce(category->name, "")
      }`;

      try {
        const fetchedProducts: Product[] = await client.fetch(query);
        setProducts(fetchedProducts);
        setFilteredProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // ✅ Wishlist Handling (Local Storage)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedWishlist = JSON.parse(window.localStorage.getItem('wishlist') || '[]');
      setWishList(savedWishlist);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }
  }, [wishlist]);

  // ✅ Scroll to Top on Page Change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, [currentPage]);

  // ✅ Apply Discount
  const applyDiscount = (price: number) => {
    return (price * 0.9).toFixed(2);
  };

  // ✅ Wishlist Toggle
  const toggleWishlist = (product: Product) => {
    setWishList((prevWishlist) => {
      const updatedWishlist = [...prevWishlist];
      const existingIndex = updatedWishlist.findIndex((item) => item.id === product.id);
      if (existingIndex !== -1) {
        updatedWishlist.splice(existingIndex, 1);
      } else {
        updatedWishlist.push(product);
      }
      return updatedWishlist;
    });
  };

  // ✅ Add to Cart & Redirect
  const handleAddToCart = (product: Product) => {
    setWishList((prevCart) => {
      const updatedCart = [...prevCart, product];
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('cart', JSON.stringify(updatedCart));
      }
      return updatedCart;
    });
    router.push('/CartComponent');
  };

  // ✅ Pagination Logic
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <div className="max-w-screen-xl mx-auto p-4 mb-4">
      <div className="relative">
        <Image
          src={allProductImg || '/placeholder.svg'}
          alt="All Products"
          className="w-full h-[209px] object-cover"
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-extrabold text-center tracking-wide text-white bg-opacity-50 p-4 rounded">
          All Products Collection
        </h1>
      </div>

      <SearchAndFilter setFilteredProducts={setFilteredProducts} products={products} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300"
          >
            <Link href={`/ProductDetailPage/${product.id}`}>
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
              <p className="text-gray-700 mt-2">Price: €{applyDiscount(product.price)}</p>

              <div className="flex items-center space-x-4 mt-2">
                <button
                  className="bg-gradient-to-r from-purple-900 to-pink-500 text-white rounded-lg transition-transform shadow-md duration-300 hover:scale-110 px-4 py-2"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to cart
                </button>

                <button
                  className="p-2 rounded-full bg-transparent hover:scale-110 transition-transform duration-200"
                  onClick={() => toggleWishlist(product)}
                >
                  <FiHeart
                    className={`w-6 h-6 ${
                      wishlist.some((item) => item.id === product.id) ? 'text-red-500' : 'text-gray-400'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Pagination
        totalItems={filteredProducts.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      <ReviewsAndRatings />
    </div>
  );
}
