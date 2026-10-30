import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileBottomNav from '@/components/layout/MobileBottomNav';
import Hero from '@/components/home/Hero';
import FeatureBar from '@/components/home/FeatureBar';
import ProductGridSection from '@/components/home/ProductGridSection';
import KeralaBanner from '@/components/home/KeralaBanner';

export const metadata = {
  title: 'AS Associates | Quality Commodities. Trusted Worldwide.',
  description: 'AS Associates is a Kannur-based wholesale trading and supply company delivering premium food commodities and essential products across India and global markets.',
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBF8F5]">
      {/* 1. Header Navigation */}
      <Navbar />

      {/* 2. Home Page Layout matching Top-Left Mockup */}
      <main className="flex-1 pb-16 sm:pb-0">
        {/* Hero Section */}
        <Hero />

        {/* 4 Feature Highlights Strip */}
        <FeatureBar />

        {/* Our Products Grid (12 Items) */}
        <ProductGridSection />

        {/* From Kerala to the World Banner */}
        <KeralaBanner />
      </main>

      {/* 3. Footer */}
      <Footer />

      {/* 4. Mobile Fixed Bottom Navigation Bar */}
      <MobileBottomNav />
    </div>
  );
}
