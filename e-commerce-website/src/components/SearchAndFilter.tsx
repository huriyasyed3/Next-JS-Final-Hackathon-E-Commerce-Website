'use client';
import React, { useState, useEffect } from 'react';
import { Search, ChevronDown } from 'lucide-react';

interface SearchAndFilterProps {
  products: { id: string; name: string; price: number; category: string; imageUrl: string }[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<any[]>>;
}

const SearchAndFilter: React.FC<SearchAndFilterProps> = ({ products, setFilteredProducts }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    // Extract unique categories from products
    const uniqueCategories = Array.from(new Set(products.map((product) => product.category)));
    setCategories(['All', ...uniqueCategories]);
  }, [products]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    filterProducts(query, selectedCategory);
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const category = event.target.value;
    setSelectedCategory(category);
    filterProducts(searchQuery, category);
  };

  const filterProducts = (query: string, category: string) => {
    const filtered = products.filter((product) => {
      const matchesCategory = category === 'All' || product.category === category;
      const matchesSearch = product.name.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
    setFilteredProducts(filtered);
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
            className="w-full pl-10 pr-4 py-2 border border-gray-400 rounded-lg focus:ring-2  focus:ring-indigo-500 focus:border-transparent transition duration-150 ease-in-out"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>

        {/* Category Filter */}
        <div className="relative w-full md:w-1/3">
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="w-full pl-4 pr-10 py-2 border  border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-150 ease-in-out"
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