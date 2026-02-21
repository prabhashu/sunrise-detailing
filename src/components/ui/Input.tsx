import React from 'react';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}
export function Input({
  label,
  error,
  icon,
  className = '',
  ...props
}: InputProps) {
  return (
    <div className="w-full">
      {label &&
      <label className="block text-sm font-medium text-gray-700 mb-1 ml-1">
          {label}
        </label>
      }
      <div className="relative">
        <input
          className={`
            w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 
            backdrop-blur-sm focus:bg-white focus:ring-2 focus:ring-sunrise-orange/50 focus:border-sunrise-orange
            transition-all duration-200 outline-none
            ${icon ? 'pl-10' : ''}
            ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : ''}
            ${className}
          `}
          {...props} />

        {icon &&
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
            {icon}
          </div>
        }
      </div>
      {error && <p className="mt-1 text-sm text-red-500 ml-1">{error}</p>}
    </div>);

}