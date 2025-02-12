// src/components/Email.tsx

import React from 'react';
import Input from './Input';

interface EmailProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Email: React.FC<EmailProps> = (props) => {
  const validateEmail = (value: string): string | null => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value) ? null : 'Invalid email address';
  };

  return <Input {...props} type="email" validate={validateEmail} />;
};

export default Email;
