import { useState } from "react";

const Controlledform =()=>{
    const[name,setName]=useState("");
    const handleChange=(event)=>{
        setName(event.target.value)

    }
    return(
        <>
         <input type="text" value={name} onChange={handleChange} /> 
      <p>You Typed... {name}</p> 
     
        </>
    )
}

export default Controlledform;