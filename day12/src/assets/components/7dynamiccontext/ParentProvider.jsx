import { createContext } from "react";
import { useState } from "react";
import CounterDisplay from "./ChildDynamic";



export const CounterContext = createContext();

const ParentProvider =()=>{

const[count,setCount]=useState(0);

return(
    <>
    <CounterContext.Provider value={{count,setCount}}>
        <div>
            <h2>Counter</h2>
            <CounterDisplay/>
            <button onClick={()=>setCount(count+1)}>Increment</button><br/><br/>
            <button onClick={()=>setCount(0)}>Clear</button>
        </div>
    </CounterContext.Provider>
    </>
)


}

export default ParentProvider;