'use client';

export default function Input({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  required,
  hint,
  ...props
}) {
  return (
    <div className="form-group">
      {label && (
        <label htmlFor={name} className="form-label">
          {label}{required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : hint ? `${name}-hint` : undefined}
        className={`form-input ${error ? 'form-input-error' : ''}`}
        {...props}
      />
      {error && <p id={`${name}-error`} className="form-error" role="alert">{error}</p>}
      {hint && !error && <p id={`${name}-hint`} className="form-hint">{hint}</p>}
    </div>
  );
}
