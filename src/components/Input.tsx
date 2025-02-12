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
  const [isFocused, setIsFocused] = useState(false);
  const debouncedValue = useDebounce(value, 300);

  useEffect(() => {
    if (validate) {
      const validationError = validate(debouncedValue);
      setLocalError(validationError);
    }
  }, [debouncedValue, validate]);

  return (
    <div className="mb-4 group">
      <label className="block text-sm font-medium mb-2 text-gray-300 transition-colors group-hover:text-gray-200" 
             htmlFor={props.id}>
        {label}
      </label>
      <div className="relative">
        <input
          {...props}
          className={`w-full px-4 py-2.5 bg-gray-800/50 backdrop-blur-sm border-2 rounded-lg 
                     text-gray-200 placeholder-gray-500
                     transition-all duration-200
                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900
                     ${localError || error 
                       ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/50' 
                       : 'border-gray-700/50 focus:border-blue-500 focus:ring-blue-500/50'}`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity duration-200 pointer-events-none
                        ${isFocused ? 'opacity-100' : 'group-hover:opacity-50'}`} />
      </div>
      {(localError || error) && (
        <p className="text-red-400 text-xs mt-1.5 flex items-center">
          <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          {localError || error}
        </p>
      )}
    </div>
  );
};

export default Input;