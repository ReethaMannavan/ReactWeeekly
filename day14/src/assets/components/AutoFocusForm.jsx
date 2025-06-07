import { useState, useEffect, useRef } from 'react';

function AutoFocusForm() {
  const [name, setName] = useState('');
  const nameInputRef = useRef(null);

  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted name: ${name}`);
  };

  return (
    <div>
      <h2>Form with Auto-Focus</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input 
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            ref={nameInputRef} 
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AutoFocusForm;