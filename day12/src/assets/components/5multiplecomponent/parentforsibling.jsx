import { createContext } from "react";
import SiblingOne from "./siblingone";
import SiblingTwo from "./siblingtwo";

export const UserContext = createContext();

const ParentforMultiChild =()=>{

    const user="Reetha";

    return(
        <UserContext.Provider value={user}>
            <div>
                <h2>Parent Component</h2>
                <SiblingOne/>
                <SiblingTwo/>
            </div>
        </UserContext.Provider>

    )

}

export default ParentforMultiChild;