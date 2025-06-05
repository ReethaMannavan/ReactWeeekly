import { useState, useCallback } from "react";

function useClipboard() {
  const [isCopied, setIsCopied] = useState(false);
  const [error, setError] = useState(null);

  const copy = useCallback(async (text) => {
    if (!navigator.clipboard) {
      setError(new Error("Clipboard API not supported"));
      setIsCopied(false);
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setError(null);

      setTimeout(() => setIsCopied(false), 1500);
    } catch (err) {
      setError(err);
      setIsCopied(false);
    }
  }, []);

  return { copy, isCopied, error };
}

export default useClipboard;
