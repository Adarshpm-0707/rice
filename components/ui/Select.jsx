'use client';

export default function Select({
  label,
  name,
  options = [],
  value,
  onChange,
  error,
  required,
  placeholder = 'Select an option',
  ...props
}) {
  return (
    <div className="form-group">
      {label && (
        <label htmlFor={name} className="form-label">
          {label}{required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
        </label>
      )}
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`form-input appearance-none cursor-pointer ${error ? 'form-input-error' : ''}`}
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E\")",
          backgroundPosition: 'right 0.75rem center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '1.25rem',
          paddingRight: '2.5rem',
        }}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt.value || opt} value={opt.value || opt}>
            {opt.label || opt}
          </option>
        ))}
      </select>
      {error && <p id={`${name}-error`} className="form-error" role="alert">{error}</p>}
    </div>
  );
}
