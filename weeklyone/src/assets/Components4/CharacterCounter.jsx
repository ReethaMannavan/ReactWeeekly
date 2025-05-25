import React, { useState } from 'react';


const CharCounter = () => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClear = () => {
    setText('');
  };

  return (
    <>
    <div className="char-counter">
      <h2>Real-time Character Counter</h2>
      <input
        type="text"
        className="text-input"
        placeholder="Type something..."
        value={text}
        onChange={handleChange}
      />
      <p>Characters typed: {text.length}</p>
      <button className="clear-button" onClick={handleClear}>Clear</button>
    </div>
    </>
    
  );
};

export default CharCounter;