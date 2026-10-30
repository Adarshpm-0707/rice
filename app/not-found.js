import Link from 'next/link';
import Container from '@/components/layout/Container';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex items-center" aria-labelledby="notfound-heading">
      <Container>
        <div className="text-center py-20">
          <div className="font-display text-[10rem] font-bold text-forest-900/10 leading-none select-none" aria-hidden="true">
            404
          </div>
          <div className="-mt-8 relative z-10">
            <h1 className="font-display font-bold text-4xl text-charcoal mb-4" id="notfound-heading">
              Page Not Found
            </h1>
            <p className="text-gray-500 text-lg mb-8 max-w-md mx-auto">
              We can't find the page you're looking for. It may have moved or the link may be incorrect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="btn-primary btn-lg">
                Back to Home
              </Link>
              <Link href="/products" className="btn-outline btn-lg">
                Browse Products
              </Link>
              <Link href="/contact" className="btn-ghost btn-lg">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
