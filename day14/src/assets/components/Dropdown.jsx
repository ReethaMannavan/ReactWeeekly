import { useState } from "react";

const DropDown =()=>{
    const[fruit,setFruit]=useState("Apple");

    return(
        <>
        <form>
            <select value={fruit} onChange={(e)=>setFruit(e.target.value)}>
                <option value="Apple">Apple</option>
                <option value="Kiwi">Kiwi</option>
                <option value="Strawberry">Strawberry</option>
            </select>
            <p>Selected fruit: {fruit}</p>
        </form>
        </>
    )
}

export default DropDown;