import { useContext } from "react";
import { UserContext } from "./nestedParent";

const NestedChild=()=>{
    const user = useContext(UserContext);

    return(
        <>
        <p>Hello!! from GrandChild {user}</p>
        </>
    )
}

export default NestedChild;