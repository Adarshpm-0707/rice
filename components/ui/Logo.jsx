import Link from 'next/link';

export default function Logo({ className = '' }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2 group select-none ${className}`} aria-label="AS Associates Home">
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className="font-heading font-black text-2xl md:text-3xl tracking-tight text-[#163A29] leading-none group-hover:text-[#112E20] transition-colors">
            AS
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-[#9A5C28]" />
        </div>
        <span className="text-[10px] md:text-[11px] font-semibold tracking-[0.22em] text-[#554E46] uppercase leading-tight -mt-0.5">
          ASSOCIATES
        </span>
      </div>
    </Link>
  );
}

