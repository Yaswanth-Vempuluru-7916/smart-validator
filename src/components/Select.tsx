// src/components/Select.tsx

import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { value: string; label: string }[];
  error?: string;
}

const Select: React.FC<SelectProps> = ({ label, options, error, ...props }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor={props.id}>
        {label}
      </label>
      <select
        {...props}
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 ${
          error ? 'border-red-500' : 'border-gray-600'
        }`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-xs italic mt-1">{error}</p>}
    </div>
  );
};

export default Select;
