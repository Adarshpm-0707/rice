'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Package, Globe, PhoneCall, Send } from 'lucide-react';

export default function MobileBottomNav() {
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Products', href: '/products', icon: Package },
    { label: 'Markets', href: '/markets', icon: Globe },
    { label: 'Contact', href: '/contact', icon: PhoneCall },
    { label: 'Get Quote', href: '/contact?type=quote', icon: Send, highlight: true },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-lg border-t border-[#E8DFD3] px-2 py-1.5 md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
      <div className="max-w-md mx-auto grid grid-cols-5 items-center gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          if (item.highlight) {
            return (
              <Link
                key={item.label}
                href={item.href}
                className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-gradient-to-b from-[#A6642D] to-[#8C5020] text-white shadow-md active:scale-95 transition-transform"
              >
                <Icon className="w-4 h-4 stroke-[2.2]" />
                <span className="text-[10px] font-bold tracking-tight mt-0.5">Quote</span>
              </Link>
            );
          }

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all active:scale-95 ${
                isActive
                  ? 'text-[#9A5C28] font-bold bg-[#9A5C28]/10'
                  : 'text-[#686055] hover:text-[#163A29]'
              }`}
            >
              <Icon className="w-4 h-4 stroke-[1.9]" />
              <span className="text-[10px] tracking-tight mt-0.5">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
