import { useContext } from "react";
import { UserContext } from "./parentforsibling";

const SiblingOne=()=>{
    const user = useContext(UserContext);
    return(
        <>
        <p>Sibling One : Hello, {user}</p>
        </>
    )

}

export default SiblingOne;