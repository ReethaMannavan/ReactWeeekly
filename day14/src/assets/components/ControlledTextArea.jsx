import { useState } from "react";



const ControlledTextArea = () => {

const [text, setText] = useState('');

  return (
    <div>
      <h2>Controlled Textarea Example</h2>
      <textarea 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Type something here..." 
        rows="4" 
        cols="50"
      />
      <p>You Typed:</p>
      <div style={{ whiteSpace: 'pre-wrap', border: '1px solid #ccc', padding: '10px' }}>
        {text}
      </div>
    </div>
  )
}

export default ControlledTextArea;
