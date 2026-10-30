import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileBottomNav from '@/components/layout/MobileBottomNav';
import Image from 'next/image';
import Link from 'next/link';
import { Globe, ArrowRight, Ship, FileCheck, ShieldCheck } from 'lucide-react';
import { company } from '@/data/company';

export const metadata = {
  title: 'Markets & Export | AS Associates - Bringing Indian Quality Commodities to Global Markets',
  description: 'AS Associates is expanding into international markets, with a focus on exporting quality Indian food commodities and essential products to overseas buyers and distributors.',
};

export default function MarketsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBF8F5]">
      <Navbar />

      <main className="flex-1 pb-16 sm:pb-0">
        {/* Breadcrumb Bar matching mockup */}
        <div className="bg-[#FAF6F0] border-b border-[#EBE3D7] py-6 md:py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-xs text-[#7A7167] mb-2">
              <Link href="/" className="hover:text-[#9A5C28]">Home</Link>
              <span>/</span>
              <span className="text-[#1F1A16] font-medium">Markets</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-[#1F1A16]">
              Markets & Export
            </h1>
          </div>
        </div>

        {/* Hero Banner Section with Shipping Port Visual matching mockup */}
        <section className="relative overflow-hidden py-16 md:py-24 bg-[#14261E] text-white" style={{ position: 'relative' }}>
          <div className="absolute inset-0 z-0" style={{ position: 'absolute' }}>
            <Image
              src="/images/sections/markets-export-ship.jpg"
              alt="AS Associates Global Commodity Export and Shipping"
              fill
              priority
              className="object-cover object-center brightness-75 contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" style={{ position: 'absolute' }} />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" style={{ position: 'relative' }}>
            <div className="max-w-3xl space-y-6">
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight">
                {company.exportHeadline}
              </h2>

              <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl">
                {company.exportDescription}
              </p>

              {/* Destination Badges matching mockup */}
              <div className="pt-2">
                <span className="text-xs uppercase tracking-wider text-[#E5AB6B] font-semibold block mb-3">
                  Target Export Destinations
                </span>
                <div className="flex flex-wrap gap-3">
                  {company.markets.map((m) => (
                    <div
                      key={m.name}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/15 backdrop-blur-md border border-white/25 text-sm font-medium hover:bg-white/25 transition-colors"
                    >
                      <span className="text-base">{m.flag}</span>
                      <span>{m.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA matching mockup */}
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-[#9A5C28] text-white font-medium hover:bg-[#824B1D] shadow-lg transition-all"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Global Export Infrastructure */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#FAF8F5] p-6 rounded-xl border border-[#EDE5DA] space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#FAF2E6] flex items-center justify-center text-[#9A5C28]">
                  <Ship className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base text-[#1F1A16]">Port & Logistics Handling</h4>
                <p className="text-xs sm:text-sm text-[#665F56] leading-relaxed">
                  Fast dispatch from Cochin and Mangalore ports with dedicated palletized container loading and maritime insurance.
                </p>
              </div>

              <div className="bg-[#FAF8F5] p-6 rounded-xl border border-[#EDE5DA] space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#FAF2E6] flex items-center justify-center text-[#9A5C28]">
                  <FileCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base text-[#1F1A16]">Phytosanitary Certification</h4>
                <p className="text-xs sm:text-sm text-[#665F56] leading-relaxed">
                  Batch testing, Certificate of Origin, and international inspection compliance for customs clearance in destination ports.
                </p>
              </div>

              <div className="bg-[#FAF8F5] p-6 rounded-xl border border-[#EDE5DA] space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#FAF2E6] flex items-center justify-center text-[#9A5C28]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base text-[#1F1A16]">Institutional Trade Terms</h4>
                <p className="text-xs sm:text-sm text-[#665F56] leading-relaxed">
                  Transparent FOB, CIF, and CFR pricing structures with flexible trade terms for overseas distributors.
                </p>
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
