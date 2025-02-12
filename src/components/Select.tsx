// src/components/Select.tsx
import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { value: string; label: string }[];
  error?: string;
}

const Select: React.FC<SelectProps> = ({ label, options, error, ...props }) => {
  return (
    <div className="mb-4 group">
      <label className="block text-sm font-medium mb-2 text-gray-300 transition-colors group-hover:text-gray-200" 
             htmlFor={props.id}>
        {label}
      </label>
      <div className="relative">
        <select
          {...props}
          className={`w-full px-4 py-2.5 bg-gray-800/50 backdrop-blur-sm border-2 rounded-lg 
                     text-gray-200 
                     appearance-none
                     transition-all duration-200
                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900
                     ${error 
                       ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/50' 
                       : 'border-gray-700/50 focus:border-blue-500 focus:ring-blue-500/50'}`}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value} className="bg-gray-800">
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity duration-200 pointer-events-none group-hover:opacity-50" />
      </div>
      {error && <p className="text-red-400 text-xs mt-1.5">{error}</p>}
    </div>
  );
};

export default Select;
