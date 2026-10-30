import Link from 'next/link';
import Logo from '@/components/ui/Logo';
import { navLinks, footerLinks } from '@/data/navigation';
import { company } from '@/data/company';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1A382B] text-[#EDE4DA] pt-16 pb-24 sm:pb-16 border-t border-[#264D3C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#FAF8F5] inline-block px-4 py-2 rounded-lg">
              <Logo />
            </div>
            <p className="text-sm text-[#D1C6BA] max-w-sm leading-relaxed">
              {company.about}
            </p>
            <div className="pt-2 text-xs font-semibold uppercase tracking-widest text-[#D6A162]">
              {company.categoryTag}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading text-lg font-semibold text-white">Company</h4>
            <ul className="space-y-2 text-sm text-[#C9BEB2]">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white transition-colors flex items-center gap-1 group">
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading text-lg font-semibold text-white">Commodities</h4>
            <ul className="space-y-2 text-sm text-[#C9BEB2]">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-lg font-semibold text-white">Contact Us</h4>
            <div className="space-y-3 text-sm text-[#D1C6BA]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D6A162] shrink-0 mt-0.5" />
                <span>{company.contact.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D6A162] shrink-0" />
                <a href={`tel:${company.contact.phone}`} className="hover:text-white transition-colors">
                  {company.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#D6A162] shrink-0" />
                <a href={`mailto:${company.contact.email}`} className="hover:text-white transition-colors">
                  {company.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A89D91] gap-4">
          <div>
            © {new Date().getFullYear()} AS Associates. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Supply</Link>
            <span>Kerala, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
