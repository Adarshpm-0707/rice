export default function SectionHeading({
  label,
  title,
  subtitle,
  center = false,
  light = false,
  className = '',
}) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''} ${className}`}>
      {label && <p className="section-label mb-3">{label}</p>}
      <h2 className={`section-heading ${light ? 'text-cream' : ''} mb-4`} style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>
        {title}
      </h2>
      {subtitle && (
        <p className={`${light ? 'section-subheading-light' : 'section-subheading'} ${center ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
      <div className={`divider mt-5 ${center ? 'mx-auto' : ''}`} aria-hidden="true" />
    </div>
  );
}
