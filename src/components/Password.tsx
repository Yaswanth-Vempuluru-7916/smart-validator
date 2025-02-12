// src/components/Password.tsx
import React, { useState } from 'react';
import Input from './Input';
import { Eye, EyeOff } from 'lucide-react';

interface PasswordProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Password: React.FC<PasswordProps> = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const validatePassword = (value: string): string | null => {
    if (value.length < 8) {
      return 'Password must be at least 8 characters long';
    }
    if (!/[A-Z]/.test(value)) {
      return 'Password must contain at least one uppercase letter';
    }
    if (!/[a-z]/.test(value)) {
      return 'Password must contain at least one lowercase letter';
    }
    if (!/[0-9]/.test(value)) {
      return 'Password must contain at least one number';
    }
    return null;
  };

  return (
    <div className="relative group">
      <Input
        {...props}
        type={showPassword ? 'text' : 'password'}
        validate={validatePassword}
        className="pr-12" // Make room for the button
      />
      <button
        type="button"
        className="absolute right-3 top-[34px] p-1.5 rounded-md text-gray-400 
                   hover:text-gray-200 focus:outline-none focus:text-gray-200
                   transition-colors duration-200"
        onClick={() => setShowPassword(!showPassword)}
        aria-label={showPassword ? 'Hide password' : 'Show password'}
      >
        {showPassword ? (
          <EyeOff className="w-4 h-4" />
        ) : (
          <Eye className="w-4 h-4" />
        )}
      </button>
    </div>
  );
};

export default Password;