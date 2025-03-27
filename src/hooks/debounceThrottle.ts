import { useEffect, useRef, useCallback, useState } from "react";

// Type for the generic value that can be debounced or throttled
type AnyFunction = (...args: any[]) => any;

// Debounce Hook (Updated)
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    // Clear any existing timeout
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }

    // Set a new timeout to update the debounced value
    timeoutRef.current = setTimeout(() => {
      setDebouncedValue(value); // Update state after delay
    }, delay) as unknown as number;

    // Cleanup on unmount or value change
    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [value, delay]);

  return debouncedValue;
}

// Throttle Hook (Unchanged)
export function useThrottle(callback: AnyFunction, limit: number) {
  const lastCallRef = useRef<number>(0);
  const timeoutRef = useRef<number | null>(null);

  const throttledFn = useCallback(
    (...args: any[]) => {
      const now = Date.now();
      if (now - lastCallRef.current >= limit) {
        callback(...args);
        lastCallRef.current = now;
      } else if (timeoutRef.current === null) {
        timeoutRef.current = setTimeout(() => {
          callback(...args);
          lastCallRef.current = Date.now();
          timeoutRef.current = null;
        }, limit - (now - lastCallRef.current)) as unknown as number;
      }
    },
    [callback, limit]
  );

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return throttledFn;
}