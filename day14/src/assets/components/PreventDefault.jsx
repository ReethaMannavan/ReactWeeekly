import { useState } from "react";

function SimpleFormTwo() {
  const [name, setName] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault(); 
    alert(`Name: ${name}`);
   
  };

  return (
    <div>
      <h2>Form Submission Example</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SimpleFormTwo;