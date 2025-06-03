import { useContext } from "react";
import { CounterContext } from "./ParentProvider";

const CounterDisplay =()=>{
    const {count} = useContext(CounterContext);

    return(
        <>
        <p>Current Count is: {count}</p>
        </>
    )
}

export default CounterDisplay;