import { useState } from "react";
import useClipboard from "../Hooks/useClipboard";

const ClipBoard = () => {
  const [text, setText] = useState("Copy this text");
  const { copy, isCopied, error } = useClipboard();

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => copy(text)}>
        {isCopied ? "Copied!!" : "Copy"}
      </button>
      {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
    </div>
  );
};

export default ClipBoard;
