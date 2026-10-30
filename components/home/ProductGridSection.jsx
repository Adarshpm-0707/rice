'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowRight, Search } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

export default function ProductGridSection() {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [searchQuery, setSearchQuery] = useState('');

  // Short labels for mobile category pills matching Screen 2 in mockup: All, Rice, Oils, Spices, etc.
  const mobileCategories = [
    { label: 'All', value: 'All Products' },
    { label: 'Rice', value: 'Rice' },
    { label: 'Oils', value: 'Edible Oils' },
    { label: 'Spices', value: 'Spices' },
    { label: 'Pulses', value: 'Pulses & Dal' },
    { label: 'Sweeteners', value: 'Sweeteners' },
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All Products' ||
        item.category.toLowerCase() === selectedCategory.toLowerCase();

      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section className="py-10 md:py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-4 md:mb-8 pb-3 md:pb-4 border-b border-[#EBE3D7]">
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1F1A16]">
              Our Products
            </h2>
            <p className="hidden md:block text-xs sm:text-sm text-[#736B61] mt-1">
              Carefully sourced and grade-tested commodities for wholesale and retail
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#9A5C28] hover:text-[#7D481C] group transition-colors"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile View Only: Search Bar & Horizontal Category Pills (Screen 2 in Mockup) */}
        <div className="block md:hidden mb-5 space-y-3">
          {/* Search bar matching mockup */}
          <div className="relative">
            <Search className="w-4 h-4 text-[#8C8379] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl border border-[#DDD3C7] bg-white text-xs text-[#1F1A16] placeholder:text-[#9A9185] focus:outline-none focus:ring-2 focus:ring-[#9A5C28]/40 focus:border-[#9A5C28] shadow-xs"
            />
          </div>

          {/* Horizontal scrollable category pills matching mockup */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 no-scrollbar -mx-4 px-4">
            {mobileCategories.map((cat) => {
              const isActive = selectedCategory === cat.value;
              return (
                <button
                  key={cat.label}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all active:scale-95 ${
                    isActive
                      ? 'bg-[#9A5C28] text-white shadow-xs'
                      : 'bg-white border border-[#E6DDD0] text-[#554D44] hover:bg-[#FAF5EE]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 12 Products Grid: 2 columns on mobile, 6 columns on laptop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.slug}
              product={product}
            />
          ))}
        </div>

        {/* Mobile Reset if filter empty */}
        {filteredProducts.length === 0 && (
          <div className="py-8 text-center bg-white rounded-xl border border-[#EDE5DA] p-4 my-2">
            <p className="text-xs text-[#686056]">No commodities match your filter.</p>
            <button
              onClick={() => { setSelectedCategory('All Products'); setSearchQuery(''); }}
              className="mt-2 text-xs text-[#9A5C28] font-bold"
            >
              Reset filter
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
