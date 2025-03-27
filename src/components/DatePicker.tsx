import { useState, ChangeEvent, useEffect } from "react";
import { useDebounce } from "../hooks/debounceThrottle";

interface DatePickerProps {
  value: string;
  onChange: (value: string) => void;
  minDate?: string;
  maxDate?: string;
  required?: boolean;
  debounceDelay?: number;
}

export const DatePicker = ({
  value,
  onChange,
  minDate,
  maxDate,
  required = false,
  debounceDelay = 500,
}: DatePickerProps) => {
  const [error, setError] = useState<string | null>(null);
  const debouncedValue = useDebounce(value, debounceDelay);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  useEffect(() => {
    if (required && !debouncedValue) {
      setError("Date is required");
      return;
    }

    if (debouncedValue) {
      const selectedDate = new Date(debouncedValue);
      const min = minDate ? new Date(minDate) : null;
      const max = maxDate ? new Date(maxDate) : null;

      if (isNaN(selectedDate.getTime())) {
        setError("Invalid date");
      } else if (min && selectedDate < min) {
        setError(`Date must be on or after ${minDate}`);
      } else if (max && selectedDate > max) {
        setError(`Date must be on or before ${maxDate}`);
      } else {
        setError(null);
      }
    } else {
      setError(null);
    }
  }, [debouncedValue, minDate, maxDate, required]);

  return (
    <div>
      <input
        type="date"
        value={value}
        onChange={handleChange}
        min={minDate}
        max={maxDate}
        className="w-full px-4 py-2 bg-gray-900/30 backdrop-blur-lg border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition duration-300 appearance-none"
      />
      <div className="h-6">
        {error && (
          <span className="text-red-400 text-sm mt-1 block bg-red-900/30 backdrop-blur-lg p-1 rounded-md">
            {error}
          </span>
        )}
      </div>
    </div>
  );
};