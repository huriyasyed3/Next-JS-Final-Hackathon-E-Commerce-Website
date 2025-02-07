'use client';
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Search, ChevronDown } from 'lucide-react';

// Define types for the product
interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
}

interface SearchAndFilterProps {
  products: Product[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const SearchAndFilter: React.FC<SearchAndFilterProps> = ({ products, setFilteredProducts }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // UseMemo to prevent unnecessary calculations on re-renders
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(products.map((product) => product.category)));
    return ['All', ...uniqueCategories];
  }, [products]);

  // useCallback to memoize filterProducts function
  const filterProducts = useCallback((query: string, category: string) => {
    const filtered = products.filter((product) => {
      const matchesCategory = category === 'All' || product.category === category;
      const matchesSearch = product.name.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
    setFilteredProducts(filtered);
  }, [products, setFilteredProducts]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      filterProducts(searchQuery, selectedCategory);
    }, 300); // Adding debounce for better performance

    return () => clearTimeout(delayDebounce);
  }, [searchQuery, selectedCategory, filterProducts]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-8">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
        
        {/* Search Input */}
        <div className="relative w-full md:w-2/3">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search for products..."
            className="w-full pl-10 pr-4 py-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-150 ease-in-out"
            aria-label="Search products"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>

        {/* Category Filter */}
        <div className="relative w-full md:w-1/3">
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-150 ease-in-out"
            aria-label="Filter by category"
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilter;
