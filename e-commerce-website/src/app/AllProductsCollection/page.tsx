'use client';
import { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client';
import SearchAndFilter from '../../components/SearchAndFilter';
import LoadingComponent from '../../components/ui/LoadingAnimation';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../../components/ui/button';
import { useRouter } from 'next/navigation';
import { FiHeart } from 'react-icons/fi';
import allProductImg from '../../../public/Product.png'
import Pagination from '@/components/Pagination';
import ReviewsAndRatings from '@/components/Reviews&Ratings';

// Define the Product interface
interface Product {
  id: string;
  category: string;
  name: string;
  price: number;
  slug: string;
  imageUrl: string;
}

export default function ProductsFetch() {
 
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [wishlist, setWishList] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Adjust this value as needed
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      const query = `*[_type == "product"]{
        "id":_id,
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

      // Wishlist Sync from Local Storage
      const savedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
      setWishList(savedWishlist);
    }

    fetchData();
  }, []);

  // Apply a 10% discount
  const applyDiscount = (price: number) => {
    return (price * 0.9).toFixed(2);
  };

  // ✅ Updated Wishlist Function
  const toggleWishlist = (product: Product) => {
    let updatedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");

    const existingIndex = updatedWishlist.findIndex((item: Product) => item.id === product.id);

    if (existingIndex !== -1) {
      updatedWishlist.splice(existingIndex, 1); // Remove if already in wishlist
    } else {
      updatedWishlist.push(product); // Add if not in wishlist
    }

    setWishList(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  // ✅ Add to Cart Function
  const handleAddToCart = (product: Product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedCart = [...existingCart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    router.push('/CartComponent');
  };

   // Pagination logic
   const indexOfLastProduct = currentPage * itemsPerPage;
   const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
   const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
 
   const handlePageChange = (pageNumber: number) => {
     setCurrentPage(pageNumber);
     window.scrollTo(0, 0); // Scroll to top when page changes
   };

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <div className="max-w-screen-xl mx-auto p-4 mb-4">
      <div className='relative'>
        <Image 
          src={allProductImg || "/placeholder.svg"}
          alt='All Products'
          className='w-full h-[209px] object-cover'
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-extrabold text-center tracking-wide text-white  bg-opacity-50 p-4 rounded">
          All Products Collection
        </h1>
      </div>

      {/* Search and Filter */}
      <SearchAndFilter setFilteredProducts={setFilteredProducts} products={products} />

      {/* Display Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
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
                {/* Add to Cart Button */}
                <Button
                  className="bg-gradient-to-r from-purple-900 to-pink-500 text-white rounded-lg transition-transform shadow-md duration-300 hover:scale-110"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to cart
                </Button>

                {/* Wishlist Button */}
                <Button 
  className="p-2 rounded-full bg-transparent hover:scale-110 transition-transform duration-200" 
  onClick={() => toggleWishlist(product)}
>
  <FiHeart className={`w-6 h-6 ${wishlist.some((item) => item.id === product.id) ? 'text-red-500' : 'text-gray-400'}`} />
</Button>

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
      <ReviewsAndRatings/>
    </div>
  );
}
