import { useState } from "react";
import { Username } from "./components/Username";
import { Email } from "./components/Email";
import { Password } from "./components/Password";
import { DatePicker } from "./components/DatePicker";
import { Button } from "./components/Button";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const handleSubmit = () => {
    console.log("Submitted!", { username, email, password, birthDate });
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black flex items-center justify-center p-4">
      <div className="bg-gray-900/30 backdrop-blur-lg border border-white/20 rounded-xl p-8 w-full max-w-md shadow-2xl">
        <h1 className="text-3xl font-bold text-white text-center mb-6 bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Form Validator
        </h1>
        <div className="space-y-4"> {/* Add space-y-4 for consistent spacing */}
          <Username value={username} onChange={setUsername} debounceDelay={500} />
          <Email value={email} onChange={setEmail} debounceDelay={500} />
          <Password value={password} onChange={setPassword} debounceDelay={500} />
          <DatePicker
            value={birthDate}
            onChange={setBirthDate}
            minDate="1900-01-01"
            maxDate={today}
            required={true}
            debounceDelay={500}
          />
          <div className="text-center">
            <Button onClick={handleSubmit} label="Submit" throttleLimit={10000} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;