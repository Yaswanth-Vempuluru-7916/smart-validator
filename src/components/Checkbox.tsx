// src/components/Checkbox.tsx

import React from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, error, ...props }) => {
  return (
    <div className="mb-4">
      <label className="flex items-center">
        <input
          type="checkbox"
          {...props}
          className="form-checkbox h-5 w-5 text-blue-600 bg-gray-700 border-gray-600"
        />
        <span className="ml-2 text-gray-300">{label}</span>
      </label>
      {error && <p className="text-red-500 text-xs italic mt-1">{error}</p>}
    </div>
  );
};

export default Checkbox;
