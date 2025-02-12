// src/components/Form.tsx

import React from 'react';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<FormProps> = ({ children, onSubmit, ...props }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(event);
  };

  return (
    <form {...props} onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-md">
      {children}
    </form>
  );
};

export default Form;
