import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Globe } from 'lucide-react';
import { company } from '@/data/company';

export default function HomeMarketsSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-[#FAF7F2] border-b border-[#EBE3D7]" style={{ position: 'relative' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Container with Shipping visual */}
        <div className="relative rounded-2xl overflow-hidden border border-[#E8DFD3] shadow-lg bg-[#14261E] text-white" style={{ position: 'relative' }}>
          <div className="absolute inset-0 z-0" style={{ position: 'absolute' }}>
            <Image
              src="/images/sections/markets-export-ship.jpg"
              alt="AS Associates Global Commodity Export and Shipping"
              fill
              className="object-cover object-center brightness-75 contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" style={{ position: 'absolute' }} />
          </div>

          <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-2xl space-y-6" style={{ position: 'relative' }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-xs text-[#E5AB6B] text-xs font-bold tracking-widest uppercase">
              <Globe className="w-3.5 h-3.5" />
              <span>Markets & Export</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white leading-tight">
              {company.exportHeadline}
            </h2>

            <p className="text-sm sm:text-base text-white/90 leading-relaxed">
              {company.exportDescription}
            </p>

            {/* Destination Badges matching mockup */}
            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider text-[#E5AB6B] font-semibold block mb-2.5">
                Target Export Destinations
              </span>
              <div className="flex flex-wrap gap-2.5">
                {company.markets.map((m) => (
                  <div
                    key={m.name}
                    className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium transition-colors"
                  >
                    <span>{m.flag}</span>
                    <span>{m.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#9A5C28] text-white font-medium hover:bg-[#824B1D] shadow transition-all group"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
