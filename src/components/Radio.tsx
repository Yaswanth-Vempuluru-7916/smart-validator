// src/components/Radio.tsx
import React from 'react';

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  options: { value: string; label: string }[];
  error?: string;
}

const Radio: React.FC<RadioProps> = ({ label, options, error, ...props }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-3 text-gray-300">{label}</label>
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option.value} 
                 className="flex items-center group cursor-pointer hover:bg-gray-800/30 p-2 rounded-lg transition-colors">
            <div className="relative">
              <input
                type="radio"
                id={`${props.name}-${option.value}`}
                {...props}
                value={option.value}
                className="peer sr-only"
              />
              <div className="h-5 w-5 rounded-full border-2 border-gray-400 bg-gray-800/50 backdrop-blur-sm
                          peer-checked:border-blue-500 peer-checked:bg-blue-500/20
                          peer-focus:ring-2 peer-focus:ring-blue-500/50 peer-focus:ring-offset-2 peer-focus:ring-offset-gray-900
                          transition-all duration-200" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500 opacity-0 peer-checked:opacity-100 transition-opacity duration-200" />
              </div>
            </div>
            <span className="ml-3 text-sm text-gray-300 group-hover:text-gray-200 transition-colors">
              {option.label}
            </span>
          </label>
        ))}
      </div>
      {error && <p className="text-red-400 text-xs mt-1.5">{error}</p>}
    </div>
  );
};

export default Radio;