import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileBottomNav from '@/components/layout/MobileBottomNav';
import Image from 'next/image';
import Link from 'next/link';
import { Eye, Target, ArrowRight } from 'lucide-react';
import { company } from '@/data/company';

export const metadata = {
  title: 'About Us | AS Associates - A Trusted Partner in Commodity Supply',
  description: 'AS Associates is a Kannur-based wholesale trading and supply company engaged in the sourcing and distribution of quality food and essential commodities.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBF8F5]">
      <Navbar />

      <main className="flex-1 pb-16 sm:pb-0">
        {/* Breadcrumb & Header matching mockup */}
        <div className="bg-[#FAF6F0] border-b border-[#EBE3D7] py-6 md:py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-xs text-[#7A7167] mb-2">
              <Link href="/" className="hover:text-[#9A5C28]">Home</Link>
              <span>/</span>
              <span className="text-[#1F1A16] font-medium">About Us</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-[#1F1A16]">
              About Us
            </h1>
          </div>
        </div>

        {/* Section 1: Story, Stats & Warehouse Truck matching mockup */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column Story & 4 Stats */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1F1A16] leading-tight">
                    A Trusted Partner<br />
                    in Commodity Supply
                  </h2>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-[#5D554C] leading-relaxed">
                  <p>{company.about}</p>
                  <p>{company.subAbout}</p>
                  <p>{company.experience}</p>
                  <p>{company.focus}</p>
                </div>

                {/* 4 Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                  {company.stats.map((s) => (
                    <div
                      key={s.label}
                      className="bg-white p-4 sm:p-5 rounded-xl border border-[#EDE5DA] text-center shadow-xs"
                    >
                      <div className="font-heading text-3xl sm:text-4xl font-bold text-[#163A29]">
                        {s.value}
                      </div>
                      <div className="text-xs text-[#736B61] mt-1 font-medium">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column Warehouse & Supply Truck Visual (Clean, Full Clarity) */}
              <div className="lg:col-span-5">
                <div
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#E8DFD3] shadow-md bg-white"
                  style={{ position: 'relative' }}
                >
                  <Image
                    src="/images/sections/about-warehouse-truck.jpg"
                    alt="AS Associates Logistics Facility and Supply Truck"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 2: Vision & Mission Cards in Forest Green */}
        <section className="py-12 bg-[#FAF7F2] border-y border-[#EBE3D7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Vision Card */}
              <div className="bg-[#163A29] text-white p-6 sm:p-8 rounded-2xl border border-[#24533E] shadow-sm space-y-3">
                <div className="flex items-center gap-3 text-[#E5AB6B]">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Eye className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-white">
                    Our Vision
                  </h3>
                </div>
                <p className="text-sm text-[#E2D8CD] leading-relaxed">
                  {company.vision.description}
                </p>
              </div>

              {/* Mission Card */}
              <div className="bg-[#163A29] text-white p-6 sm:p-8 rounded-2xl border border-[#24533E] shadow-sm space-y-3">
                <div className="flex items-center gap-3 text-[#E5AB6B]">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-white">
                    Our Mission
                  </h3>
                </div>
                <p className="text-sm text-[#E2D8CD] leading-relaxed">
                  {company.mission.description}
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Section 3: Vibrant Kerala Paddy Field Card matching mockup */}
        <section className="py-12 md:py-16 bg-[#FAF7F2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="relative rounded-2xl overflow-hidden border border-[#E8DFD3] shadow-lg min-h-[360px] sm:min-h-[420px] flex items-center p-6 sm:p-12 text-white"
              style={{ position: 'relative' }}
            >
              <div className="absolute inset-0 z-0" style={{ position: 'absolute' }}>
                <Image
                  src="/images/sections/kerala-paddy-field.jpg"
                  alt="Kerala green paddy fields agricultural sourcing"
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                />
                {/* Clean soft gradient on left for high-contrast typography while leaving the green fields bright */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent pointer-events-none"
                  style={{ position: 'absolute' }}
                />
              </div>

              <div className="relative z-10 max-w-xl space-y-4 text-left" style={{ position: 'relative' }}>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#E5AB6B] block">
                  Agricultural Heritage
                </span>
                <h3 className="font-heading text-2xl sm:text-4xl font-semibold text-white drop-shadow-xs">
                  Committed to Authentic Kerala Agriculture
                </h3>
                <p className="text-xs sm:text-base text-white/95 leading-relaxed font-normal drop-shadow-xs">
                  From traditional Kaima and Palakkadan Matta paddy fields to cold-pressed copra mills, we nurture direct relationships with certified producers.
                </p>
                <div className="pt-2">
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#9A5C28] text-white text-xs sm:text-sm font-semibold hover:bg-[#824B1D] shadow-md transition-all active:scale-95"
                  >
                    <span>Explore Our Products</span>
                    <ArrowRight className="w-4 h-4" />
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
