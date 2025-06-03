import { useContext } from "react";
import { UserContext } from "./parentupdate";


const ChildUpdate=()=>{
const {setMessage} = useContext(UserContext);
return(
    <>
    <button onClick={()=>setMessage("Update from child Component")}>
        Update Message
    </button>
    </>
)

}

export default ChildUpdate;