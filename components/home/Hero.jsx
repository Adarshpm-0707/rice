import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, FileText, CheckCircle2, ShieldCheck, Award, Clock, Globe } from 'lucide-react';
import { company } from '@/data/company';

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-[#FAF7F2] min-h-[520px] lg:min-h-[580px] flex items-center border-b border-[#EFE8DF]"
      style={{ position: 'relative' }}
    >
      {/* 1. Full-Bleed Hero Background (Spans full viewport width on all devices) */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ position: 'absolute' }}
      >
        <Image
          src="/images/hero/hero-banner-full.jpg"
          alt="AS Associates wholesale commodities - Kerala rice, oils, pulses, spices"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right-center lg:object-center opacity-30 md:opacity-100"
        />
        {/* Smooth cream gradient overlay on the left so typography is ultra-crisp */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/95 to-[#FAF7F2]/50 md:via-[#FAF7F2]/90 md:to-transparent lg:via-[#FAF7F2]/80 lg:to-transparent"
          style={{ position: 'absolute' }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FAF8F5] to-transparent pointer-events-none"
          style={{ position: 'absolute' }}
        />
      </div>

      {/* 2. Hero Content Container */}
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 relative z-10 w-full"
        style={{ position: 'relative' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 xl:col-span-6 space-y-4 sm:space-y-6 text-left">
            {/* Category tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9A5C28]/10 border border-[#9A5C28]/25 text-[#8F5220] text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase">
              {company.categoryTag}
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-[3.5rem] font-semibold text-[#1B1713] leading-[1.15] sm:leading-[1.12] tracking-tight">
              Quality Commodities.<br />
              <span className="text-[#163A29]">Trusted Worldwide.</span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-[#524B43] leading-relaxed max-w-xl font-normal">
              {company.about}
            </p>

            {/* Action Buttons: on mobile stacked or 2-column */}
            <div className="flex flex-row items-center gap-2.5 sm:gap-4 pt-1">
              <Link
                href="/products"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-7 py-3 rounded-lg sm:rounded-md bg-[#9A5C28] text-white text-xs sm:text-sm font-semibold hover:bg-[#824B1D] shadow-md transition-all active:scale-95"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/contact"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-3 rounded-lg sm:rounded-md border border-[#4F463D]/40 bg-white/80 text-[#3C362F] text-xs sm:text-sm font-semibold hover:bg-white transition-all shadow-xs active:scale-95"
              >
                <FileText className="w-3.5 h-3.5 text-[#9A5C28]" />
                <span>Request Quote</span>
              </Link>
            </div>

            {/* Desktop trust indicators (hidden on mobile) */}
            <div className="hidden sm:flex items-center gap-6 pt-4 text-xs text-[#6B6359] border-t border-[#EAE2D7]/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#163A29]" />
                <span>Kannur, Kerala Sourcing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#9A5C28]" />
                <span>Institutional & Wholesale Distribution</span>
              </div>
            </div>
          </div>

          {/* 3. Mobile View Showcase (Screen 1 in Mockup) */}
          <div className="block md:hidden mt-2 space-y-4">
            {/* Visual Card showing AS Associates burlap sack & commodities */}
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-lg border border-[#E8DFD3] bg-[#FAF6F0]">
              <img
                src="/images/hero/hero-banner-full.jpg"
                alt="AS Associates commodities - Kerala rice, oils, pulses, spices"
                className="w-full h-full object-cover object-right"
                loading="eager"
              />
            </div>

            {/* Mobile quick 4-feature pills */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <div className="bg-white/90 rounded-xl p-2.5 border border-[#EDE5DA] flex items-center gap-2 shadow-xs">
                <Award className="w-4 h-4 text-[#9A5C28] shrink-0" />
                <span className="text-[11px] font-bold text-[#1F1A16] leading-tight">Premium Quality</span>
              </div>
              <div className="bg-white/90 rounded-xl p-2.5 border border-[#EDE5DA] flex items-center gap-2 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-[#9A5C28] shrink-0" />
                <span className="text-[11px] font-bold text-[#1F1A16] leading-tight">Competitive Pricing</span>
              </div>
              <div className="bg-white/90 rounded-xl p-2.5 border border-[#EDE5DA] flex items-center gap-2 shadow-xs">
                <Clock className="w-4 h-4 text-[#9A5C28] shrink-0" />
                <span className="text-[11px] font-bold text-[#1F1A16] leading-tight">Timely Delivery</span>
              </div>
              <div className="bg-white/90 rounded-xl p-2.5 border border-[#EDE5DA] flex items-center gap-2 shadow-xs">
                <Globe className="w-4 h-4 text-[#9A5C28] shrink-0" />
                <span className="text-[11px] font-bold text-[#1F1A16] leading-tight">Global Reach</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
