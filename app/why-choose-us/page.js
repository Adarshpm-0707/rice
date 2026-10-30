import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileBottomNav from '@/components/layout/MobileBottomNav';
import Link from 'next/link';
import { ShieldCheck, BadgePercent, Truck, Clock, Handshake, Users, ArrowRight } from 'lucide-react';
import { company } from '@/data/company';

export const metadata = {
  title: 'Why Choose Us | AS Associates - Your Reliable Sourcing Partner',
  description: 'We focus on providing dependable sourcing, competitive pricing, consistent product quality and timely delivery across India and international markets.',
};

export default function WhyChooseUsPage() {
  const iconMap = {
    ShieldCheck: ShieldCheck,
    BadgePercent: BadgePercent,
    Truck: Truck,
    Clock: Clock,
    Handshake: Handshake,
    Users: Users,
  };

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
              <span className="text-[#1F1A16] font-medium">Why Choose Us</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-[#1F1A16]">
              Why Choose Us
            </h1>
          </div>
        </div>

        {/* Why Choose Us Page Layout matching mockup */}
        <section className="py-12 md:py-16 bg-white border-b border-[#EBE3D7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[#1F1A16] leading-tight">
                Your Reliable Sourcing Partner
              </h2>
              <p className="text-base text-[#615A52] mt-3 leading-relaxed">
                We focus on providing dependable sourcing, competitive pricing, consistent product quality and timely delivery.
              </p>
            </div>

            {/* 6 Value Cards Grid matching mockup */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {company.whyChooseUs.map((item) => {
                const Icon = iconMap[item.icon] || ShieldCheck;
                return (
                  <div
                    key={item.title}
                    className="bg-[#FAF8F5] rounded-xl p-6 border border-[#EDE5DA] hover:border-[#9A5C28]/60 hover:shadow-md transition-all duration-300 space-y-3"
                  >
                    <div className="w-11 h-11 rounded-lg bg-[#FAF2E6] border border-[#E8DCcb] flex items-center justify-center text-[#9A5C28]">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#1F1A16]">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#665F56] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Procurement trust note */}
            <div className="mt-12 p-8 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD3] flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#163A29]">
                  Institutional Supply Partner
                </span>
                <h4 className="font-heading text-xl font-semibold text-[#1F1A16]">
                  Supplying Kerala's premier wholesale and civil networks
                </h4>
                <p className="text-xs sm:text-sm text-[#665E55] max-w-xl">
                  {company.experience}
                </p>
              </div>
              <Link
                href="/contact"
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#9A5C28] text-white text-sm font-medium hover:bg-[#824B1D] shadow transition-all"
              >
                <span>Request Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </section>
      </main>

      <Footer />
      <MobileBottomNav />
    </div>
  );
}
