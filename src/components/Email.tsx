// src/components/Email.tsx

import React from 'react';
import Input from './Input';

interface EmailProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Email: React.FC<EmailProps> = (props) => {
  const validateEmail = (value: string): string | null => {
    if (!value) return null; // Allow empty input

    // Check for @ symbol
    if (!value.includes('@')) {
      return 'Email must contain @';
    }

    const [username, domain] = value.split('@');

    // Check username
    if (!username) {
      return 'Email must have a username before @';
    }

    // Check domain
    if (!domain) {
      return 'Email must have a domain after @';
    }

    // Check for . in domain
    if (!domain.includes('.')) {
      return 'Email domain must contain a .';
    }

    const [domainName, extension] = domain.split('.');

    // Check domain name
    if (!domainName) {
      return 'Email must have a domain name';
    }

    // Check extension
    if (!extension || extension.length < 2) {
      return 'Email must have a valid domain extension (at least 2 characters)';
    }

    return null; // Valid email
  };

  return (
    <Input
      {...props}
      type="email"
      validate={validateEmail}
      autoComplete="email"
    />
  );
};

export default Email;
