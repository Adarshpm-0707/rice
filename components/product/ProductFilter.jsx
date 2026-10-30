'use client';
import { categories } from '@/data/products';

export default function ProductFilter({ active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center" role="group" aria-label="Filter products by category">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          aria-pressed={active === cat}
          className={`product-filter-btn ${active === cat ? 'product-filter-btn-active' : 'product-filter-btn-inactive'}`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
