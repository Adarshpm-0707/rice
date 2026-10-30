'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, ArrowRight, Filter } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileBottomNav from '@/components/layout/MobileBottomNav';
import ProductCard from '@/components/product/ProductCard';
import { products, categories } from '@/data/products';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [searchQuery, setSearchQuery] = useState('');

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
    <div className="min-h-screen flex flex-col bg-[#FBF8F5]">
      <Navbar />

      <main className="flex-1 pb-16 sm:pb-0">
        {/* Breadcrumb & Header matching mockup */}
        <div className="bg-[#FAF6F0] border-b border-[#EBE3D7] py-5 sm:py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-xs text-[#7A7167] mb-1.5 sm:mb-2">
              <Link href="/" className="hover:text-[#9A5C28]">Home</Link>
              <span>/</span>
              <span className="text-[#1F1A16] font-medium">Products</span>
            </div>
            <h1 className="font-heading text-2xl sm:text-4xl font-semibold text-[#1F1A16]">
              Our Products
            </h1>
          </div>
        </div>

        {/* Catalog Main Layout */}
        <section className="py-6 sm:py-10 md:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              
              {/* Left Sidebar Category Filter: on mobile horizontal swipeable, on laptop vertical sidebar */}
              <div className="lg:col-span-3 space-y-3 sm:space-y-6">
                
                {/* Search Bar */}
                <div className="relative">
                  <Search className="w-4 h-4 text-[#8C8379] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search commodities..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 sm:py-2.5 rounded-xl border border-[#DDD3C7] bg-white text-xs sm:text-sm text-[#1F1A16] focus:outline-none focus:ring-2 focus:ring-[#9A5C28]/40 focus:border-[#9A5C28] transition-all shadow-xs"
                  />
                </div>

                {/* Mobile Horizontal Pill Category Filter */}
                <div className="flex lg:hidden items-center gap-1.5 overflow-x-auto pb-2 no-scrollbar -mx-4 px-4">
                  {categories.map((cat) => {
                    const isActive = selectedCategory === cat;
                    return (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all active:scale-95 ${
                          isActive
                            ? 'bg-[#9A5C28] text-white shadow-xs'
                            : 'bg-white border border-[#E6DDD0] text-[#554D44] hover:bg-[#FAF5EE]'
                        }`}
                      >
                        {cat}
                      </button>
                    );
                  })}
                </div>

                {/* Desktop Vertical Categories List matching mockup (Hidden on Mobile) */}
                <div className="hidden lg:block bg-white rounded-xl border border-[#EDE5DA] p-3 shadow-xs space-y-1">
                  <div className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-[#7A7167] border-b border-[#F0E8DE] mb-1">
                    Categories
                  </div>
                  {categories.map((cat) => {
                    const isActive = selectedCategory === cat;
                    return (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all text-left ${
                          isActive
                            ? 'bg-[#9A5C28] text-white font-semibold shadow-xs'
                            : 'text-[#4F473E] hover:bg-[#FAF5EE] hover:text-[#163A29]'
                        }`}
                      >
                        <span>{cat}</span>
                        {isActive && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </button>
                    );
                  })}
                </div>

                {/* Bulk Supply Assistance note (Desktop only) */}
                <div className="hidden lg:block p-4 rounded-xl bg-[#FAF5ED] border border-[#E8DECf] text-xs space-y-2">
                  <span className="font-bold text-[#163A29] block">Wholesale & Institutional</span>
                  <p className="text-[#6B6258] leading-relaxed">
                    Custom bulk packing in 5 kg, 10 kg, 25 kg, and 50 kg bags with certified batch reports.
                  </p>
                  <Link href="/contact" className="text-[#9A5C28] font-bold inline-flex items-center gap-1 hover:underline">
                    <span>Request Quotation</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

              </div>

              {/* Right Products Grid */}
              <div className="lg:col-span-9 space-y-4 sm:space-y-6">
                
                {/* Status Bar */}
                <div className="flex items-center justify-between text-xs text-[#736B61] pb-2 border-b border-[#EDE5DA]">
                  <div>
                    Showing <span className="font-bold text-[#1F1A16]">{filteredProducts.length}</span> commodities
                    {selectedCategory !== 'All Products' && (
                      <span> in <span className="text-[#9A5C28] font-semibold">{selectedCategory}</span></span>
                    )}
                  </div>
                  {selectedCategory !== 'All Products' && (
                    <button
                      onClick={() => setSelectedCategory('All Products')}
                      className="text-[#9A5C28] font-semibold hover:underline"
                    >
                      Clear filter
                    </button>
                  )}
                </div>

                {/* 2 columns on mobile, 3/4 columns on laptop */}
                {filteredProducts.length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 sm:gap-4">
                    {filteredProducts.map((product) => (
                      <ProductCard
                        key={product.slug}
                        product={product}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="py-12 sm:py-16 text-center bg-white rounded-xl border border-[#EDE5DA] p-6">
                    <p className="text-xs sm:text-base text-[#686056]">No commodities found matching your search.</p>
                    <button
                      onClick={() => { setSelectedCategory('All Products'); setSearchQuery(''); }}
                      className="mt-3 text-xs sm:text-sm text-[#9A5C28] font-semibold hover:underline"
                    >
                      Reset filters
                    </button>
                  </div>
                )}

              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileBottomNav />
    </div>
  );
}
