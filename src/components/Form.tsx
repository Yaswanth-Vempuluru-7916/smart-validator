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
    <form {...props} ref={ref} onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-md">
      {children}
    </form>
  );
});

export default Form;
