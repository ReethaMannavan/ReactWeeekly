import React, { useState } from 'react';


const PersonCard = ({ name }) => {
  const [age, setAge] = useState(0);

  const increaseAge = () => {
    setAge(prevAge => prevAge + 1);
  };

  const clearAge = () => {
    setAge(0);
  };

  return (
    <>
     <div className="person-card">
      <h2>Hello, {name}!</h2>
      <p>You are {age} years old.</p>
      <div className="button-group">
        <button onClick={increaseAge}>Increase Age</button>
        <button className="clear-button" onClick={clearAge}>Clear</button>
      </div>
    </div>
    </>
   
  );
};

export default PersonCard;