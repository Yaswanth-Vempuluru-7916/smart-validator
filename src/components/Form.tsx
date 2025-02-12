// src/components/Form.tsx
import React, { forwardRef } from 'react';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Form = forwardRef<HTMLFormElement, FormProps>(({ children, onSubmit, ...props }, ref) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(event);
  };

  return (
    <form 
      {...props} 
      ref={ref} 
      onSubmit={handleSubmit} 
      className="relative backdrop-blur-xl bg-gray-900/50 p-8 rounded-2xl shadow-xl border border-gray-700/50 space-y-6"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl" />
      <div className="relative">{children}</div>
    </form>
  );
});

export default Form;