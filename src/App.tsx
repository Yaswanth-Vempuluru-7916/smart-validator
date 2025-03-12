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
    
    if (formRef.current) {
      formRef.current.reset();
    }

    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex justify-center items-center p-8 relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDUwIDAgTCAwIDAgMCA1MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="w-full max-w-2xl backdrop-blur-lg bg-white/10 rounded-2xl shadow-2xl p-8 border border-white/20">
        <Form onSubmit={handleSubmit} ref={formRef} className="space-y-6">
          <h2 className="text-3xl font-bold mb-8 text-white text-center bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Sample Form
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <Input label="Name" name="name" id="name" required />
            <Email label="Email" name="email" id="email" required />
          </div>
          
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
          
          <div className="space-y-4">
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
          </div>
          
          <div className="pt-4">
            < type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-lg transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-900">
              Submit
            </>
          </div>
        </Form>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="animate-in slide-in-from-top-4 duration-300">
            <div className="backdrop-blur-xl bg-gradient-to-r from-green-500/90 to-emerald-500/90 text-white px-8 py-6 rounded-xl shadow-2xl border border-white/20 transform transition-all">
              <p className="text-lg font-semibold">Form Submitted Successfully!</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;