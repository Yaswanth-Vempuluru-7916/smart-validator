// src/components/Button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', ...props }) => {
  const baseClasses = 'relative overflow-hidden font-semibold py-2.5 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white focus:ring-blue-500 focus:ring-offset-blue-900',
    secondary: 'bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white focus:ring-gray-500 focus:ring-offset-gray-900',
    danger: 'bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white focus:ring-red-500 focus:ring-offset-red-900'
  };

  return (
    <button
      {...props}
      className={`${baseClasses} ${variantClasses[variant]} ${props.className || ''}`}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white/10 to-transparent opacity-0 hover:opacity-20 transition-opacity duration-200" />
    </button>
  );
};

export default Button;