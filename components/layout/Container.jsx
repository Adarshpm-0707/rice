export default function Container({ children, className = '', narrow = false }) {
  return (
    <div className={`container mx-auto ${narrow ? 'max-w-4xl' : ''} ${className}`}>
      {children}
    </div>
  );
}
