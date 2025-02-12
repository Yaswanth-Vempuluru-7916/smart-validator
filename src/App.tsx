// src/App.tsx

import React, { useState, useRef } from "react";
import Form from "./components/Form";
import Input from "./components/Input";
import Email from "./components/Email";
import Password from "./components/Password";
import Select from "./components/Select";
import TextArea from "./components/TextArea";
import Checkbox from "./components/Checkbox";
import Radio from "./components/Radio";
import Range from "./components/Range";
import Button from "./components/Button";

const App: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(Object.fromEntries(formData));
    setShowPopup(true);
    
    // Reset form fields
    if (formRef.current) {
      formRef.current.reset();
    }

    // Hide popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center p-6 relative">
      <Form onSubmit={handleSubmit} ref={formRef}>
        <h2 className="text-2xl font-bold mb-6 text-white">Sample Form</h2>
        
        <Input label="Name" name="name" id="name" required />
        
        <Email label="Email" name="email" id="email" required />
        
        <Password label="Password" name="password" id="password" required />
        
        <Select
          label="Country"
          name="country"
          id="country"
          options={[
            { value: "us", label: "United States" },
            { value: "ca", label: "Canada" },
            { value: "uk", label: "United Kingdom" },
          ]}
        />
        
        <TextArea label="Comments" name="comments" id="comments" rows={4} />
        
        <Checkbox label="I agree to the terms and conditions" name="agree" id="agree" required />
        
        <Radio
          label="Preferred Contact Method"
          name="contactMethod"
          options={[
            { value: "email", label: "Email" },
            { value: "phone", label: "Phone" },
            { value: "mail", label: "Mail" },
          ]}
        />
        
        <Range label="Age" name="age" id="age" min={18} max={100} defaultValue={30} />
        
        <Button type="submit">Submit</Button>
      </Form>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg">
            <p className="text-lg font-semibold">Form Submitted Successfully!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
