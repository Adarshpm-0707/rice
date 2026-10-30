'use client';

import { X, Sparkles, CheckCircle2, Truck, Store, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductDetailModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-3xl bg-[#FAF8F5] rounded-2xl shadow-2xl border border-[#EDE5DA] overflow-hidden z-10 max-h-[90vh] flex flex-col" style={{ position: 'relative' }}>
        {/* Header / Close */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#EAE2D5] bg-white">
          <div className="flex items-center gap-2 text-xs text-[#7A7167]">
            <Link href="/" className="hover:text-[#9A5C28]">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-[#9A5C28]">Products</Link>
            <span>/</span>
            <span className="text-[#1F1A16] font-medium">{product.name}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#F2EBE1] text-[#554E46] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Product Image */}
            <div
              className="relative w-full aspect-square rounded-2xl overflow-hidden bg-white border border-[#EDE6DC] shadow-sm flex items-center justify-center p-6"
              style={{ position: 'relative' }}
            >
              <div
                className="relative w-full h-full"
                style={{ position: 'relative' }}
              >
                <Image
                  src={product.slug === 'biriyani-rice-kaima' ? '/images/products/detail-kaima-rice.jpg' : product.image}
                  alt={product.name}
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute top-3 left-3 bg-[#163A29] text-white text-[10px] font-semibold px-2.5 py-1 rounded-md tracking-wider uppercase" style={{ position: 'absolute' }}>
                {product.category}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-4">
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[#1F1A16] leading-snug">
                  {product.name}
                </h2>
                <p className="text-sm text-[#5E564E] mt-2 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Highlights matching mockup */}
              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#3E3831]">
                  <div className="w-5 h-5 rounded-full bg-[#9A5C28]/10 text-[#9A5C28] flex items-center justify-center shrink-0">
                    <Sparkles className="w-3 h-3" />
                  </div>
                  <span className="font-medium">Aromatic & Premium Quality</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#3E3831]">
                  <div className="w-5 h-5 rounded-full bg-[#9A5C28]/10 text-[#9A5C28] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3 h-3" />
                  </div>
                  <span className="font-medium">Consistent Grain Size</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#3E3831]">
                  <div className="w-5 h-5 rounded-full bg-[#9A5C28]/10 text-[#9A5C28] flex items-center justify-center shrink-0">
                    <Truck className="w-3 h-3" />
                  </div>
                  <span className="font-medium">Suitable for Bulk Supply</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#3E3831]">
                  <div className="w-5 h-5 rounded-full bg-[#9A5C28]/10 text-[#9A5C28] flex items-center justify-center shrink-0">
                    <Store className="w-3 h-3" />
                  </div>
                  <span className="font-medium">Ideal for Retail & Institutional Use</span>
                </div>
              </div>

              {/* Specs pill badges */}
              {product.packaging && (
                <div className="pt-2">
                  <span className="text-xs font-semibold text-[#786F64] block mb-1.5">Packaging Options:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.packaging.map((pack) => (
                      <span key={pack} className="text-xs px-2.5 py-1 bg-white border border-[#E5DDD2] rounded-md text-[#4A433B]">
                        {pack}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action buttons */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#EAE2D5]">
                <Link
                  href={`/contact?product=${encodeURIComponent(product.name)}`}
                  onClick={onClose}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-md bg-[#9A5C28] text-white text-sm font-semibold hover:bg-[#824B1D] shadow-sm transition-all"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="flex-1 inline-flex items-center justify-center py-3 px-4 rounded-md border border-[#9A5C28] text-[#9A5C28] text-sm font-semibold hover:bg-[#9A5C28]/10 transition-all"
                >
                  Get in Touch
                </Link>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
