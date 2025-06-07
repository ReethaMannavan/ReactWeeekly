import { useState } from 'react';

function DynamicForm() {
  const [fields, setFields] = useState(['']);

  const handleChange = (index, value) => {
    const newFields = [...fields];
    newFields[index] = value;
    setFields(newFields);
  };

  const addField = () => {
    setFields([...fields, '']);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted values: \n ${fields.join('\n')}`);
  };

  return (
    <div>
      <h2>Dynamic Form Fields</h2>
      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div key={index}>
            <label>Input Field {index + 1}: </label>
            <input 
              type="text" 
              value={field} 
              onChange={(e) => handleChange(index, e.target.value)} 
              required 
            />
          </div>
        ))}
        <button type="button" onClick={addField}>Add Field</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default DynamicForm;
