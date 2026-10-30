import { cn } from '@/lib/cn';

export default function Card({ children, variant = 'default', className = '', ...props }) {
  const variants = {
    default: 'card',
    hover: 'card-hover',
    product: 'card-product',
    service: 'card-service',
  };

  return (
    <div className={cn(variants[variant] || 'card', className)} {...props}>
      {children}
    </div>
  );
}
