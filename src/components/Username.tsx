import { Input } from "./Input";

interface UsernameProps {
  value: string;
  onChange: (value: string) => void;
  debounceDelay?: number;
}

export const Username = ({ value, onChange, debounceDelay }: UsernameProps) => {
  const validateUsername = (username: string): string | null => {
    if (!username) return "Username is required";
    if (username.length < 3) return "Username must be at least 3 characters";
    if (username.length > 20) return "Username must be 20 characters or less";
    if (!/^[a-zA-Z0-9_]+$/.test(username))
      return "Username can only contain letters, numbers, and underscores";
    return null;
  };

  return (
    <Input
      type="text"
      value={value}
      onChange={onChange}
      validate={validateUsername}
      debounceDelay={debounceDelay}
      placeholder="Enter your username"
    />
  );
};