import React from 'react';

export function InputField({
  label,
  id,
  type = 'text',
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  autoComplete,
  error,
  hint,
  children,
}) {
  return (
    <div className="space-y-0.5">
      <label htmlFor={id} className="block text-sm font-medium text-slate-700">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          name={name || id}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className={`w-full rounded-3xl border px-4 py-2 text-sm text-slate-900 bg-white shadow-sm transition focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary ${
            error ? 'border-secondary' : 'border-border'
          }`}
        />
        {children && <div className="absolute inset-y-0 right-3 flex items-center">{children}</div>}
      </div>
      <p className={`text-xs ${error ? 'text-secondary' : 'text-slate-400'}`}>
        {error || hint}
      </p>
    </div>
  );
}

export default InputField;
