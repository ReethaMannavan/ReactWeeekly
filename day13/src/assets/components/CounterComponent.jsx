
import useCounter from "../Hooks/useCounter";

const CounterComponent =()=>{
    const {count,increment,decrement,reset}=useCounter(0);

    return(
        <>
        <div className="counter">
            <h3>Count :{count}</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
        </>
    )

}

export default CounterComponent;