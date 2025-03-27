import { Input } from "./Input";

interface EmailProps {
  value: string;
  onChange: (value: string) => void;
  debounceDelay?: number;
}

export const Email = ({ value, onChange, debounceDelay }: EmailProps) => {
  const validateEmail = (email: string): string | null => {
    if (!email) return "Email is required";
    const [username, domain] = email.split("@");
    if (!username || username.length === 0) return "Email must have a username before @";
    if (!domain || domain.length === 0) return "Email must have a domain after @";
    const domainParts = domain.split(".");
    if (domainParts.length < 2 || !domainParts[0]) return "Email domain must contain a .";
    const extension = domainParts[domainParts.length - 1];
    if (!extension || extension.length < 2) return "Email must have a valid domain extension (at least 2 characters)";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Invalid email format";
    return null;
  };

  return (
    <Input
      type="email"
      value={value}
      onChange={onChange}
      validate={validateEmail}
      debounceDelay={debounceDelay}
      placeholder="Enter your email"
    />
  );
}