import { useContext } from "react";
import { UserContext } from "./parentupdate";

const ChildDisplay=()=>{
    const {message} = useContext(UserContext);
    return(
        <>
        <p>Message: {message}</p>
        </>
    )
}

export default ChildDisplay;