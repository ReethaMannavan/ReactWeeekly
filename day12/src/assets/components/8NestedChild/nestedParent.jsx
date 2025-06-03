import { createContext } from "react";
import NestedChildOne from "./nestedchild1";

export const UserContext = createContext();

const ParentforNested = () => {
  const username = "Reetha";

  return (
    <>
      <UserContext.Provider value={username}>
        <div>
          <h2>Parent component</h2>

          <NestedChildOne />
        </div>
      </UserContext.Provider>
    </>
  );
};

export default ParentforNested;
