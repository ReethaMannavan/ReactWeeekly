import { useContext } from "react";
import { UserContext } from "./parentforsibling";

const SiblingTwo=()=>{
    const user = useContext(UserContext);
    return(
        <>
        <p>Sibling Two : Hai, {user}</p>
        </>
    )

}

export default SiblingTwo;