import { useContext } from "react";
import colorContext from "./color";

const ChildComponentClr = ()=>{

    const color = useContext(colorContext);

    return(
        <div style={{backgroundColor:color, color:'white', width: "400px",padding: '5px'}}>
            <p>Accessing color from parent: {color}</p>
        </div>
    )
}

export default ChildComponentClr;