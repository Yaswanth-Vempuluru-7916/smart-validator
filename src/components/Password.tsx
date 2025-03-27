import { Input } from "./Input";

interface PasswordProps {
  value: string;
  onChange: (value: string) => void;
  debounceDelay?: number;
}

export const Password = ({ value, onChange, debounceDelay }: PasswordProps) => {
  const validatePassword = (password: string): string | null => {
    if (!password) return "Password is required";
    if (password.length < 8) return "Password must be at least 8 characters";
    if (!/[A-Z]/.test(password)) return "Password must contain a capital letter";
    if (!/[0-9]/.test(password)) return "Password must contain a number";
    if (!/[^A-Za-z0-9]/.test(password)) return "Password must contain a special character";
    return null;
  };

  return (
    <Input
      type="password"
      value={value}
      onChange={onChange}
      validate={validatePassword}
      debounceDelay={debounceDelay}
      placeholder="Enter your password"
      showToggle={true}
    />
  );
};