import { useState, ChangeEvent, useEffect } from "react";
import { useDebounce } from "../hooks/debounceThrottle";
import { Eye, EyeOff } from "lucide-react";

interface InputProps {
  type: string;
  value: string;
  onChange: (value: string) => void;
  validate?: (value: string) => string | null;
  debounceDelay?: number;
  placeholder?: string;
  showToggle?: boolean;
}

export const Input = ({
  type,
  value,
  onChange,
  validate,
  debounceDelay = 500,
  placeholder,
  showToggle = false,
}: InputProps) => {
  const [error, setError] = useState<string | null>(null);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const debouncedValue = useDebounce(value, debounceDelay);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  useEffect(() => {
    if (validate) {
      const validationResult = validate(debouncedValue);
      setError(validationResult);
    }
  }, [debouncedValue, validate]);

  const inputType = showToggle && isPasswordVisible ? "text" : type;

  return (
    <div className="flex flex-col space-y-2">
      <div className="relative">
        <input
          type={inputType}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-600/10 text-white placeholder-gray-300 backdrop-blur-md border border-white border-opacity-20 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 w-full"
        />
        {showToggle && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-white focus:outline-none"
          >
            {isPasswordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
      <div className="h-8"> {/* Increased from h-6 to h-8 */}
        {error && (
          <span className="text-red-300 text-sm bg-red-500/10 px-2 py-1 rounded backdrop-blur-md">
            {error}
          </span>
        )}
      </div>
    </div>
  );
};