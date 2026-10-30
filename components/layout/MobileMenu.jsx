'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '@/data/navigation';
import { company } from '@/data/company';

export default function MobileMenu({ isOpen, onClose, pathname }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mobile-menu-overlay"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="mobile-menu-drawer"
          >
            <div className="mobile-menu-header">
              <span className="font-display font-bold text-xl text-forest-900">AS Associates</span>
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-gray-500 hover:text-forest-900 hover:bg-forest-50 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex-1 py-4 overflow-y-auto" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={`mobile-nav-link ${pathname === link.href ? 'mobile-nav-link-active' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="p-6 border-t border-forest-50 space-y-3">
              <Link
                href="/contact"
                onClick={onClose}
                className="btn-primary w-full justify-center"
              >
                Get Bulk Quote
              </Link>
              <a
                href={`tel:${company.contact.phone}`}
                className="flex items-center gap-2 text-forest-700 text-sm font-medium px-4 py-2"
              >
                <Phone className="w-4 h-4" />
                {company.contact.phone}
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
