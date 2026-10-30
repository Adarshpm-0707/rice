import { ShieldCheck, BadgePercent, Truck, Clock, Handshake, Users } from 'lucide-react';
import { company } from '@/data/company';

export default function HomeWhyChooseUs() {
  const iconMap = {
    ShieldCheck: ShieldCheck,
    BadgePercent: BadgePercent,
    Truck: Truck,
    Clock: Clock,
    Handshake: Handshake,
    Users: Users,
  };

  return (
    <section className="py-16 md:py-24 bg-white border-b border-[#EBE3D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#9A5C28] block mb-2">
            Why Choose Us
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[#1F1A16]">
            Your Reliable Sourcing Partner
          </h2>
          <p className="text-sm sm:text-base text-[#615A52] mt-3">
            {company.focus}
          </p>
        </div>

        {/* 6 Value Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {company.whyChooseUs.map((item) => {
            const Icon = iconMap[item.icon] || ShieldCheck;
            return (
              <div
                key={item.title}
                className="bg-[#FAF8F5] rounded-xl p-6 border border-[#EDE5DA] hover:border-[#9A5C28]/50 hover:shadow-md transition-all duration-300 space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FAF2E6] border border-[#E8DCcb] flex items-center justify-center text-[#9A5C28]">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#1F1A16]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#665F56] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

