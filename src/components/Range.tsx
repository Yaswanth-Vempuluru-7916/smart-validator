// src/components/Range.tsx
import React, { useState } from 'react';
import { useThrottle } from '../hooks/debounceThrottle';

interface RangeProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value'> {
  label: string;
  error?: string;
}

const Range: React.FC<RangeProps> = ({ label, error, defaultValue, ...props }) => {
  const [value, setValue] = useState(defaultValue || 0);
  const throttledSetValue = useThrottle(setValue, 100);

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2 text-gray-300" htmlFor={props.id}>
        {label}
      </label>
      <div className="relative group">
        <input
          type="range"
          {...props}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer
                   before:absolute before:h-2 before:bg-gradient-to-r before:from-blue-500 before:to-blue-600
                   before:rounded-l-lg before:transition-all
                   [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4
                   [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white
                   [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:transition-transform
                   [&::-webkit-slider-thumb]:hover:scale-110
                   focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-gray-900"
          value={value}
          onChange={(e) => throttledSetValue(Number(e.target.value))}
          style={{
            background: `linear-gradient(to right, rgb(59, 130, 246) ${value}%, rgb(75, 85, 99) ${value}%)`
          }}
        />
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
          <span className="text-sm text-gray-400 bg-gray-800/90 px-2 py-1 rounded-md backdrop-blur-sm">
            {value}
          </span>
        </div>
      </div>
      {error && <p className="text-red-400 text-xs mt-4">{error}</p>}
    </div>
  );
};

export default Range;
