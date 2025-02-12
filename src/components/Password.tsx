// src/components/Password.tsx

import React, { useState } from 'react';
import Input from './Input';

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
    <div className="relative">
      <Input
        {...props}
        type={showPassword ? 'text' : 'password'}
        validate={validatePassword}
      />
      <button
        type="button"
        className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? 'Hide' : 'Show'}
      </button>
    </div>
  );
};

export default Password;
