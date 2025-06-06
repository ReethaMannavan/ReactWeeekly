import { useState } from "react"; 
 
const useForm = (initialState) => { 
  const [values, setValues] = useState(initialState); 
const handleChange = (event) => { 
   setValues({ ...values, [event.target.name]: event.target.value }); 
  }; 
 
  return { values, handleChange }; 
}; 

export default useForm;