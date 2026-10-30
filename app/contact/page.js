'use client';

import { Suspense, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileBottomNav from '@/components/layout/MobileBottomNav';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { company } from '@/data/company';
import { products } from '@/data/products';

function ContactContent() {
  const searchParams = useSearchParams();
  const initialProduct = searchParams.get('product') || '';

  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: initialProduct,
    quantity: '',
    destination: '',
    message: '',
  });

  useEffect(() => {
    if (initialProduct) {
      setFormState((prev) => ({ ...prev, product: initialProduct }));
    }
  }, [initialProduct]);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
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
              <span className="text-[#1F1A16] font-medium">Contact</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-[#1F1A16]">
              Contact Us
            </h1>
          </div>
        </div>

        {/* Contact Page Layout matching mockup */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Column: Get in Touch matching mockup */}
              <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-[#EDE5DA] shadow-xs space-y-8">
                <div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-[#1F1A16]">
                    Get in Touch
                  </h2>
                  <p className="text-sm text-[#635C53] mt-2 leading-relaxed">
                    We are here to assist you with product inquiries, bulk orders, export opportunities and partnership requests.
                  </p>
                </div>

                {/* Contact info list with rounded icons matching mockup */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-[#FAF2E6] border border-[#E8DCcb] flex items-center justify-center text-[#9A5C28] shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-medium text-[#7D756C] block">Call Us</span>
                      <a href={`tel:${company.contact.phone}`} className="text-base sm:text-lg font-semibold text-[#1F1A16] hover:text-[#9A5C28] transition-colors">
                        {company.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-[#FAF2E6] border border-[#E8DCcb] flex items-center justify-center text-[#9A5C28] shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-medium text-[#7D756C] block">Email Us</span>
                      <a href={`mailto:${company.contact.email}`} className="text-base sm:text-lg font-semibold text-[#1F1A16] hover:text-[#9A5C28] transition-colors">
                        {company.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-[#FAF2E6] border border-[#E8DCcb] flex items-center justify-center text-[#9A5C28] shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-medium text-[#7D756C] block">Our Location</span>
                      <span className="text-base sm:text-lg font-semibold text-[#1F1A16] block">
                        {company.contact.location}
                      </span>
                      <span className="text-xs text-[#7D756C]">
                        {company.contact.address}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Registered Civil Supplies Supplier */}
                <div className="p-4 rounded-xl bg-[#FAF6F0] border border-[#EADFD3] text-xs text-[#686055] space-y-1">
                  <span className="font-bold text-[#163A29] block">Institutional Supplier</span>
                  <p>Registered supplier network for Kerala State Civil Supplies Corporation & Consumerfed.</p>
                </div>
              </div>

              {/* Right Column: Inquiry Form Card matching mockup */}
              <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-[#EDE5DA] shadow-md">
                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#FAF2E6] text-[#9A5C28] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="font-heading text-2xl font-semibold text-[#1F1A16]">
                      Enquiry Received
                    </h3>
                    <p className="text-sm text-[#635C53] max-w-md mx-auto">
                      Thank you for contacting AS Associates. Our procurement representative will review your commodity requirements and send you a formal quotation promptly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-6 py-2.5 rounded-md bg-[#9A5C28] text-white text-sm font-medium hover:bg-[#824B1D] transition-colors"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#4F473E] mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-[#DDD3C7] bg-[#FAF8F5] text-sm text-[#1F1A16] focus:outline-none focus:ring-2 focus:ring-[#9A5C28]/40 focus:border-[#9A5C28] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#4F473E] mb-1">
                          Company Name
                        </label>
                        <input
                          type="text"
                          placeholder="Company Name"
                          value={formState.company}
                          onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-[#DDD3C7] bg-[#FAF8F5] text-sm text-[#1F1A16] focus:outline-none focus:ring-2 focus:ring-[#9A5C28]/40 focus:border-[#9A5C28] transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#4F473E] mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="Email Address"
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-[#DDD3C7] bg-[#FAF8F5] text-sm text-[#1F1A16] focus:outline-none focus:ring-2 focus:ring-[#9A5C28]/40 focus:border-[#9A5C28] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#4F473E] mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="Phone Number"
                          value={formState.phone}
                          onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-[#DDD3C7] bg-[#FAF8F5] text-sm text-[#1F1A16] focus:outline-none focus:ring-2 focus:ring-[#9A5C28]/40 focus:border-[#9A5C28] transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#4F473E] mb-1">
                          Product of Interest *
                        </label>
                        <select
                          value={formState.product}
                          onChange={(e) => setFormState({ ...formState, product: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-[#DDD3C7] bg-[#FAF8F5] text-sm text-[#1F1A16] focus:outline-none focus:ring-2 focus:ring-[#9A5C28]/40 focus:border-[#9A5C28] transition-all"
                        >
                          <option value="">Select a product...</option>
                          {products.map((p) => (
                            <option key={p.slug} value={p.name}>
                              {p.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#4F473E] mb-1">
                          Required Quantity
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. 20 Tons / 1 Container"
                          value={formState.quantity}
                          onChange={(e) => setFormState({ ...formState, quantity: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-[#DDD3C7] bg-[#FAF8F5] text-sm text-[#1F1A16] focus:outline-none focus:ring-2 focus:ring-[#9A5C28]/40 focus:border-[#9A5C28] transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#4F473E] mb-1">
                        Destination (City / Country)
                      </label>
                      <input
                        type="text"
                        placeholder="Destination (City/Country)"
                        value={formState.destination}
                        onChange={(e) => setFormState({ ...formState, destination: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#DDD3C7] bg-[#FAF8F5] text-sm text-[#1F1A16] focus:outline-none focus:ring-2 focus:ring-[#9A5C28]/40 focus:border-[#9A5C28] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#4F473E] mb-1">
                        Message
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Message / Specific requirements"
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#DDD3C7] bg-[#FAF8F5] text-sm text-[#1F1A16] focus:outline-none focus:ring-2 focus:ring-[#9A5C28]/40 focus:border-[#9A5C28] transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full mt-2 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-md bg-[#9A5C28] text-white font-medium hover:bg-[#824B1D] shadow-sm hover:shadow transition-all disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      <span>{loading ? 'Sending...' : 'Send Enquiry'}</span>
                    </button>
                  </form>
                )}
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

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FBF8F5]" />}>
      <ContactContent />
    </Suspense>
  );
}
