import { useState } from "react";

const AdviceGenerator = () => {
  const [advice, setAdvice] = useState("click the button to get advice");

  const fetchadvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        setAdvice(data.slip.advice);
      })
      .catch((error) => {
        setAdvice("Error, Could not fetch advice");
      });
  };

  return (
    <>
      <div className="advice-container">
        <h1>💡 14. Advice Generator</h1>
        <p className="advice">"{advice}"</p>
        <button onClick={fetchadvice}>get Advice</button>
      </div>
    </>
  );
};

export default AdviceGenerator;
