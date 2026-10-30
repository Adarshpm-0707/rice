import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group relative bg-white rounded-xl border border-[#EDE5DA] p-3 sm:p-4 hover:border-[#9A5C28]/60 hover:shadow-md transition-all duration-300 flex flex-col items-center text-center block active:scale-[0.98]"
    >
      {/* Product Image Container */}
      <div
        className="relative w-full aspect-square max-w-[130px] sm:max-w-[150px] mb-2 sm:mb-3 rounded-full overflow-hidden bg-[#FAF6F0] p-1.5 border border-[#F2ECE3] group-hover:scale-105 transition-transform duration-300"
        style={{ position: 'relative' }}
      >
        <div
          className="relative w-full h-full rounded-full overflow-hidden"
          style={{ position: 'relative' }}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 45vw, (max-width: 1024px) 25vw, 150px"
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* Product Name */}
      <h3 className="text-xs sm:text-sm font-semibold text-[#241F1A] group-hover:text-[#9A5C28] transition-colors leading-snug min-h-[1.8rem] sm:min-h-[2rem] flex items-center justify-center">
        {product.name}
      </h3>

      {/* Category */}
      <span className="text-[10px] text-[#787066] mt-0.5">
        {product.category}
      </span>

      {/* Arrow Button */}
      <div className="mt-2 sm:mt-2.5 w-6 h-6 rounded-full bg-[#FAF5EE] border border-[#EBE3D7] group-hover:bg-[#9A5C28] group-hover:border-[#9A5C28] group-hover:text-white text-[#6F665C] flex items-center justify-center transition-colors">
        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
      </div>
    </Link>
  );
}
