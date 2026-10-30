import { cn } from '@/lib/cn';

const categoryStyles = {
  Rice: 'product-badge-rice',
  Sweeteners: 'product-badge-sweeteners',
  Oils: 'product-badge-oils',
  Spices: 'product-badge-spices',
  Pulses: 'product-badge-pulses',
};

export default function Badge({ children, category, className = '' }) {
  return (
    <span className={cn('product-badge', categoryStyles[category] || 'bg-gray-100 text-gray-700', className)}>
      {children}
    </span>
  );
}
