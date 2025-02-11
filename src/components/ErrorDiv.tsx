import { useEffect } from "react";

const ErrorDiv = ({
  error,
  setError,
}: {
  error: string | null;
  setError: (value: string | null) => void;
}) => {
  useEffect(() => {
    if (error) {
      const timeout = setTimeout(() => setError(null), 5000);
      return () => clearTimeout(timeout); // Cleanup function
    }
  }, [error, setError]);

  if (!error) return null; // Don't render if there's no error

  return (
    <div
      className="absolute top-[80px] bg-orange-hover text-palette-100 text-sm px-3 py-2 rounded shadow-md 
             w-[250px] break-words whitespace-normal left-1 -translate-x-1/2"
    >
      {error}
    </div>
  );
};

export default ErrorDiv;
