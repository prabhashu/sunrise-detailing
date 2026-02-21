import React from 'react';
import { ChevronDown } from 'lucide-react';
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: {
    value: string;
    label: string;
  }[];
}
export function Select({
  label,
  error,
  options,
  className = '',
  ...props
}: SelectProps) {
  return (
    <div className="w-full">
      {label &&
      <label className="block text-sm font-medium text-gray-700 mb-1 ml-1">
          {label}
        </label>
      }
      <div className="relative">
        <select
          className={`
            w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 
            backdrop-blur-sm focus:bg-white focus:ring-2 focus:ring-sunrise-orange/50 focus:border-sunrise-orange
            transition-all duration-200 outline-none appearance-none cursor-pointer
            ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : ''}
            ${className}
          `}
          {...props}>

          {options.map((opt) =>
          <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          )}
        </select>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
          <ChevronDown size={18} />
        </div>
      </div>
      {error && <p className="mt-1 text-sm text-red-500 ml-1">{error}</p>}
    </div>);

}