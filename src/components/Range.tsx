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
      <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor={props.id}>
        {label}
      </label>
      <input
        type="range"
        {...props}
        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
        value={value}
        onChange={(e) => throttledSetValue(Number(e.target.value))}
      />
      <div className="text-gray-300 mt-1">{value}</div>
      {error && <p className="text-red-500 text-xs italic mt-1">{error}</p>}
    </div>
  );
};

export default Range;
