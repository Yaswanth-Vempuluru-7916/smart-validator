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
      <label className="block text-gray-300 text-sm font-bold mb-2">{label}</label>
      {options.map((option) => (
        <div key={option.value} className="flex items-center mb-2">
          <input
            type="radio"
            id={`${props.name}-${option.value}`}
            {...props}
            value={option.value}
            className="form-radio h-5 w-5 text-blue-600 bg-gray-700 border-gray-600"
          />
          <label htmlFor={`${props.name}-${option.value}`} className="ml-2 text-gray-300">
            {option.label}
          </label>
        </div>
      ))}
      {error && <p className="text-red-500 text-xs italic mt-1">{error}</p>}
    </div>
  );
};

export default Radio;
