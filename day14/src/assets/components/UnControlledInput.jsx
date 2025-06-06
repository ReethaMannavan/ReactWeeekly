import { useRef } from "react";

const UnControlledform =()=>{
    const nameRef = useRef();

    const handleSubmit=(event)=>{
        event.preventDefault();
        alert(`Entered Name: ${nameRef.current.value}`);

    }
    return(
        <>
          <form onSubmit={handleSubmit}> 
      <input type="text" ref={nameRef} /> 
      <button type="submit">Submit</button> 
    </form> 
     
        </>
    )
}

export default UnControlledform;