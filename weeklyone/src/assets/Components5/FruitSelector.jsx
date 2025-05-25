import React, { useState } from 'react';


const FruitSelector = () => {
  const [selectedFruit, setSelectedFruit] = useState('');

  const fruits = ['Apple', 'Banana', 'Cherry', 'Grape', 'Orange', 'Mango'];

  const handleChange = (e) => {
    setSelectedFruit(e.target.value);
  };

  const handleClear = () => {
    setSelectedFruit('');
  };

  return (
    <>
    <div className="fruit-selector">
      <h2>Select Your Favorite Fruit</h2>
      <select value={selectedFruit} onChange={handleChange} className="dropdown">
        <option value="" disabled>
          -- Choose a fruit --
        </option>
        {fruits.map((fruit) => (
          <option key={fruit} value={fruit}>
            {fruit}
          </option>
        ))}
      </select>

      <div>
        <button onClick={handleClear} className="clear-buttonfruit" disabled={!selectedFruit}>
          Clear
        </button>
      </div>

      {selectedFruit && (
        <p className="selected-fruit">
          Your favorite fruit is: <strong>{selectedFruit}</strong>
        </p>
      )}
    </div>
    </>
    
  );
};

export default FruitSelector;