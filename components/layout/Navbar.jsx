'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, ChevronRight, MessageSquare, MapPin } from 'lucide-react';
import Logo from '@/components/ui/Logo';
import { navLinks } from '@/data/navigation';
import { company } from '@/data/company';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#EDE6DC] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation (Unchanged for Laptop/Desktop) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-[14px] font-medium transition-colors rounded-md ${
                    isActive
                      ? 'text-[#9A5C28] font-semibold bg-[#9A5C28]/8'
                      : 'text-[#48423B] hover:text-[#163A29] hover:bg-[#F2ECE3]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Action (Unchanged for Laptop/Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-md text-sm font-medium bg-[#9A5C28] text-white hover:bg-[#824B1D] shadow-sm transition-all duration-200 hover:shadow"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Right Bar (Enhanced app-style mobile header) */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Quick Call Icon Button */}
            <a
              href={`tel:${company.contact.phone}`}
              className="w-9 h-9 rounded-full bg-[#FAF2E6] border border-[#E8DCcb] flex items-center justify-center text-[#9A5C28] active:scale-95 transition-transform"
              aria-label="Call AS Associates"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Quick Quote Pill */}
            <Link
              href="/contact"
              className="text-xs font-bold px-3 py-2 rounded-lg bg-[#9A5C28] text-white shadow-xs active:scale-95 transition-transform"
            >
              Quote
            </Link>

            {/* Hamburger Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-9 h-9 rounded-lg border border-[#EDE5DA] bg-white flex items-center justify-center text-[#48423B] active:bg-[#F2ECE3] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile App Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="fixed top-0 right-0 w-[85%] max-w-sm h-full bg-[#FAF8F5] shadow-2xl flex flex-col justify-between border-l border-[#EDE6DC] z-10 animate-in slide-in-from-right duration-250">
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between p-5 border-b border-[#EDE6DC] bg-white">
                <Logo />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 rounded-full bg-[#FAF5EE] border border-[#EDE5DA] flex items-center justify-center text-[#48423B]"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Tagline */}
              <div className="px-5 py-3 bg-[#FAF5ED] border-b border-[#EDE6DC] text-[11px] font-semibold text-[#8B5220] tracking-wider uppercase">
                Wholesale • Institutional Supply • Export
              </div>

              {/* Navigation Links with Icons */}
              <div className="p-3 space-y-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? 'bg-[#9A5C28] text-white font-semibold shadow-xs'
                          : 'text-[#48423B] hover:bg-[#F2ECE3]'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#8E8478]'}`} />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Bottom Actions inside drawer */}
            <div className="p-5 border-t border-[#EDE6DC] bg-white space-y-3">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="w-full inline-flex items-center justify-center py-3 rounded-xl bg-[#9A5C28] text-white font-semibold text-sm shadow text-center"
              >
                Request Bulk Quotation
              </Link>

              <div className="flex items-center justify-between gap-2 pt-1 text-xs text-[#6F675C]">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#9A5C28]" />
                  <span>Kannur, Kerala</span>
                </div>
                <a
                  href={`tel:${company.contact.phone}`}
                  className="font-semibold text-[#163A29] hover:underline"
                >
                  {company.contact.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
