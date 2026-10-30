import Image from 'next/image';
import Link from 'next/link';
import { Eye, Target, ArrowRight } from 'lucide-react';
import { company } from '@/data/company';

export default function HomeAboutSection() {
  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#EBE3D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#9A5C28] block mb-2">
            About Us
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[#1F1A16] leading-tight">
            A Trusted Partner in Commodity Supply
          </h2>
          <p className="text-sm sm:text-base text-[#5D554C] mt-3 leading-relaxed">
            {company.about}
          </p>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {company.stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-xl p-5 border border-[#EDE4D8] text-center shadow-xs"
            >
              <div className="font-heading text-3xl sm:text-4xl font-bold text-[#163A29]">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-[#736B61] mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Story, Vision & Logistics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text & Vision/Mission */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-sm text-[#5D554C] leading-relaxed">
              {company.experience}
            </p>
            <p className="text-sm text-[#5D554C] leading-relaxed">
              {company.focus}
            </p>

            {/* Vision & Mission Cards in Forest Green */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-[#163A29] text-white p-5 rounded-xl shadow-sm space-y-2 border border-[#23533D]">
                <div className="flex items-center gap-2 text-[#E5AB6B]">
                  <Eye className="w-5 h-5" />
                  <h3 className="font-heading text-base font-semibold text-white">Our Vision</h3>
                </div>
                <p className="text-xs text-[#E1D8CE] leading-relaxed">
                  {company.vision.description}
                </p>
              </div>

              <div className="bg-[#163A29] text-white p-5 rounded-xl shadow-sm space-y-2 border border-[#23533D]">
                <div className="flex items-center gap-2 text-[#E5AB6B]">
                  <Target className="w-5 h-5" />
                  <h3 className="font-heading text-base font-semibold text-white">Our Mission</h3>
                </div>
                <p className="text-xs text-[#E1D8CE] leading-relaxed">
                  {company.mission.description}
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#9A5C28] hover:text-[#7D481C] group"
              >
                <span>Read Full Company Profile</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Logistics & Warehouse Photo */}
          <div className="lg:col-span-5 relative" style={{ position: 'relative' }}>
            <div
              className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#E8DFD3] shadow-md bg-white"
              style={{ position: 'relative' }}
            >
              <Image
                src="/images/sections/about-warehouse-truck.jpg"
                alt="AS Associates Logistics & Supply Facility"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" style={{ position: 'absolute' }} />
              <div className="absolute bottom-4 left-4 text-white" style={{ position: 'absolute' }}>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#E5AB6B] block">Logistics & Supply</span>
                <span className="text-sm font-semibold">AS Associates Dispatch Center</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
