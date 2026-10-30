import { Award, BadgePercent, Clock, Globe } from 'lucide-react';

export default function FeatureBar() {
  const features = [
    {
      title: 'Premium Quality',
      subtitle: 'Carefully sourced and tested',
      icon: Award,
    },
    {
      title: 'Competitive Pricing',
      subtitle: 'Best value for bulk buyers',
      icon: BadgePercent,
    },
    {
      title: 'Timely Delivery',
      subtitle: 'On-time, every time',
      icon: Clock,
    },
    {
      title: 'Global Reach',
      subtitle: 'Supplying across India and international markets',
      icon: Globe,
    },
  ];

  return (
    <section className="hidden md:block bg-white border-b border-[#EFE8DF] py-6 shadow-xs relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#EFE8DF]">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`flex items-start sm:items-center gap-3.5 ${
                  idx > 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-[#FAF5ED] border border-[#E8DFD3] flex items-center justify-center text-[#9A5C28] shrink-0">
                  <Icon className="w-5 h-5 stroke-[1.8]" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-sm font-bold text-[#1E1A16] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#6F675F] leading-tight">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

