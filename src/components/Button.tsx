import { useThrottle } from "../hooks/debounceThrottle";

interface ButtonProps {
  onClick?: () => void;
  label: string;
  throttleLimit?: number;
}

export const Button = ({ onClick, label, throttleLimit = 1000 }: ButtonProps) => {
  const throttledClick = useThrottle(() => {
    if (onClick) onClick();
  }, throttleLimit);

  return (
    <button
      type="button"
      onClick={throttledClick}
      className="px-4 py-2 bg-gray-900/30 backdrop-blur-lg border border-white/20 text-white rounded-lg transition duration-300 hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 shadow-lg"
    >
      {label}
    </button>
  );
};