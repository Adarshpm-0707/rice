import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileBottomNav from '@/components/layout/MobileBottomNav';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Sparkles, CheckCircle2, Truck, Store, ArrowRight, ArrowLeft } from 'lucide-react';
import { products } from '@/data/products';

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.name} | AS Associates Product Detail`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const isKaima = product.slug === 'biriyani-rice-kaima';
  const displayImage = isKaima ? '/images/products/items/detail-kaima-rice.jpg' : product.image;

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF8F5]">
      <Navbar />

      <main className="flex-1 pb-16 sm:pb-0">
        {/* Breadcrumb Bar */}
        <div className="bg-[#FAF6F0] border-b border-[#EBE3D7] py-3 sm:py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-[#7A7167]">
                <Link href="/" className="hover:text-[#9A5C28]">Home</Link>
                <span>/</span>
                <Link href="/products" className="hover:text-[#9A5C28]">Products</Link>
                <span>/</span>
                <span className="text-[#1F1A16] font-medium truncate max-w-[140px] sm:max-w-none">{product.name}</span>
              </div>
              <Link
                href="/products"
                className="inline-flex sm:hidden items-center gap-1 text-xs font-semibold text-[#9A5C28]"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>All Products</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Main Product Detail Page Layout matching mockup */}
        <section className="py-6 sm:py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-12 items-center">
              
              {/* Left Large Product Bowl Image */}
              <div className="lg:col-span-6">
                <div
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-[#EDE5DA] shadow-md p-3 sm:p-4"
                  style={{ position: 'relative' }}
                >
                  <div
                    className="relative w-full h-full rounded-xl overflow-hidden bg-[#FAF6F0]"
                    style={{ position: 'relative' }}
                  >
                    <Image
                      src={displayImage}
                      alt={product.name}
                      fill
                      priority
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 95vw, 600px"
                    />
                  </div>
                  <div
                    className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-[#163A29] text-white text-[10px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md tracking-wider uppercase shadow"
                    style={{ position: 'absolute' }}
                  >
                    {product.category}
                  </div>
                </div>
              </div>

              {/* Right Product Details matching mockup */}
              <div className="lg:col-span-6 space-y-4 sm:space-y-6">
                <div>
                  <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1F1A16] leading-tight">
                    {product.name}
                  </h1>
                  <p className="text-sm sm:text-base text-[#5D554C] mt-2 sm:mt-3 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* 4 Feature Checklist Items */}
                <div className="space-y-2.5 sm:space-y-3 pt-2 border-t border-[#EAE2D5]">
                  <div className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-[#3E3831]">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#9A5C28]/10 text-[#9A5C28] flex items-center justify-center shrink-0">
                      <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </div>
                    <span className="font-medium">Aromatic & Premium Quality</span>
                  </div>
                  <div className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-[#3E3831]">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#9A5C28]/10 text-[#9A5C28] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </div>
                    <span className="font-medium">Consistent Grain Size</span>
                  </div>
                  <div className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-[#3E3831]">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#9A5C28]/10 text-[#9A5C28] flex items-center justify-center shrink-0">
                      <Truck className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </div>
                    <span className="font-medium">Suitable for Bulk Supply</span>
                  </div>
                  <div className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-[#3E3831]">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#9A5C28]/10 text-[#9A5C28] flex items-center justify-center shrink-0">
                      <Store className="w-3.5 h-3.5 sm:w-3.5 sm:h-3.5" />
                    </div>
                    <span className="font-medium">Ideal for Retail & Institutional Use</span>
                  </div>
                </div>

                {/* Packaging specs */}
                {product.packaging && (
                  <div className="pt-1 sm:pt-2">
                    <span className="text-[11px] sm:text-xs font-semibold text-[#786F64] block mb-1.5 sm:mb-2">Available Packaging:</span>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {product.packaging.map((pack) => (
                        <span key={pack} className="text-[11px] sm:text-xs font-medium px-2.5 sm:px-3 py-1 sm:py-1.5 bg-white border border-[#E5DDD2] rounded-md text-[#4A433B]">
                          {pack}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons: Stacked on mobile, side-by-side on laptop */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 pt-3 sm:pt-4 border-t border-[#EAE2D5]">
                  <Link
                    href={`/contact?product=${encodeURIComponent(product.name)}`}
                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg sm:rounded-md bg-[#9A5C28] text-white text-sm font-semibold hover:bg-[#824B1D] shadow-sm transition-all text-center active:scale-95"
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center py-3 sm:py-3.5 px-6 rounded-lg sm:rounded-md border border-[#9A5C28] text-[#9A5C28] text-sm font-semibold hover:bg-[#9A5C28]/10 transition-all text-center active:scale-95"
                  >
                    Get in Touch
                  </Link>
                </div>
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
