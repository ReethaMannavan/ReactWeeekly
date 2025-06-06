import { useState } from "react";

const ValidationForm =()=>{
    const[email,setEmail]=useState("");
    const[error,setError]=useState("");

      const handleSubmit = (event) => { 
    event.preventDefault(); 
    if (!email.includes("@")) { 
      setError("Invalid email format"); 
      return; 
    } 
    alert(`Submitted Email: ${email}`); 
    setError(""); 
  };


  return(
    <>
     <form onSubmit={handleSubmit}> 
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} 
placeholder="Enter email" /> 
      {error && <p style={{ color: "red" }}>{error}</p>} 
      <button type="submit">Submit</button> 
    </form> 
    </>
  )
}

export default ValidationForm;