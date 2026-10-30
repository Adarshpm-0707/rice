import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function KeralaBanner() {
  return (
    <section
      className="relative overflow-hidden py-12 md:py-24 bg-[#142C21] text-white px-3 sm:px-0"
      style={{ position: 'relative' }}
    >
      {/* Background container: on mobile has rounded-2xl to feel like an app card, on laptop full bleed */}
      <div
        className="absolute inset-0 z-0 sm:rounded-none"
        style={{ position: 'absolute' }}
      >
        <Image
          src="/images/sections/kerala-world-banner.jpg"
          alt="Kerala backwaters and sunrise landscape - AS Associates global export"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Soft cinematic gradient for text legibility */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25 pointer-events-none"
          style={{ position: 'absolute' }}
        />
      </div>

      {/* Banner Content */}
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        style={{ position: 'relative' }}
      >
        <div className="max-w-2xl space-y-3 sm:space-y-4 text-left">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#E5AB6B] block">
            Global Supply Chain
          </span>

          <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-semibold leading-tight text-white drop-shadow-xs">
            From Kerala<br />
            to the World
          </h2>

          <p className="text-xs sm:text-base text-white/95 leading-relaxed max-w-xl font-normal drop-shadow-xs">
            Sourcing the finest food commodities from trusted sources and delivering to markets across the globe.
          </p>

          <div className="pt-2">
            <Link
              href="/markets"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-md bg-[#9A5C28] text-white text-xs sm:text-base font-medium hover:bg-[#824B1D] shadow-md transition-all active:scale-95 group"
            >
              <span>Our Markets</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
