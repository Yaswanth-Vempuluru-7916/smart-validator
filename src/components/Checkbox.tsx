// src/components/Checkbox.tsx
import React from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, error, ...props }) => {
  return (
    <div className="mb-4 group">
      <label className="flex items-center space-x-3 cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            {...props}
            className="peer sr-only"
          />
          <div className="h-6 w-6 border-2 border-gray-400 rounded-md bg-gray-800/50 backdrop-blur-sm transition-all duration-200 
                        peer-checked:border-blue-500 peer-checked:bg-blue-500/20
                        peer-focus:ring-2 peer-focus:ring-blue-500/50 peer-focus:ring-offset-2 peer-focus:ring-offset-gray-900" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 peer-checked:opacity-100 transition-opacity duration-200">
            <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <span className="text-gray-300 text-sm font-medium group-hover:text-gray-200 transition-colors duration-200">
          {label}
        </span>
      </label>
      {error && <p className="text-red-400 text-xs mt-1.5">{error}</p>}
    </div>
  );
};

export default Checkbox;