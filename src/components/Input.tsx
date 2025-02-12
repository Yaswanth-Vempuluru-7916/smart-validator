// src/components/Input.tsx

import React, { useState, useEffect } from 'react';
import { useDebounce } from '../hooks/debounceThrottle';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  validate?: (value: string) => string | null;
}

const Input: React.FC<InputProps> = ({ label, error, validate, ...props }) => {
  const [value, setValue] = useState('');
  const [localError, setLocalError] = useState<string | null>(null);
  const debouncedValue = useDebounce(value, 300);

  useEffect(() => {
    if (validate) {
      const validationError = validate(debouncedValue);
      setLocalError(validationError);
    }
  }, [debouncedValue, validate]);

  return (
    <div className="mb-4">
      <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor={props.id}>
        {label}
      </label>
      <input
        {...props}
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 ${
          localError ? 'border-red-500' : 'border-gray-600'
        }`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {(localError || error) && (
        <p className="text-red-500 text-xs italic mt-1">{localError || error}</p>
      )}
    </div>
  );
};

export default Input;
