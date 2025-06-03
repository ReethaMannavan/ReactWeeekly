import { createContext, useState } from "react";
import ChildDisplay from "./childdisplay";
import ChildUpdate from "./childupdate";

export const UserContext = createContext();

const ParentUpdate =()=>{

    const[message,setMessage]=useState("Hello from context provider");

    return(
    <>
    <UserContext.Provider value={{message,setMessage}}>

<div>
    <h2>Parent Component</h2>
    <ChildDisplay/>
    <ChildUpdate/>
</div>

    </UserContext.Provider>
    </>
    )



}

export default ParentUpdate;