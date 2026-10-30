'use client';

export default function Textarea({
  label,
  name,
  placeholder,
  value,
  onChange,
  error,
  required,
  rows = 5,
  ...props
}) {
  return (
    <div className="form-group">
      {label && (
        <label htmlFor={name} className="form-label">
          {label}{required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
        </label>
      )}
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`form-textarea ${error ? 'form-input-error' : ''}`}
        {...props}
      />
      {error && <p id={`${name}-error`} className="form-error" role="alert">{error}</p>}
    </div>
  );
}
