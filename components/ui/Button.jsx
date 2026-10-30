import { cn } from '@/lib/cn';

const variants = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  outline: 'btn-outline',
  'outline-light': 'btn-outline-light',
  ghost: 'btn-ghost',
  whatsapp: 'btn-whatsapp',
};

const sizes = {
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  as: Tag = 'button',
  ...props
}) {
  return (
    <Tag
      className={cn('btn', variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
