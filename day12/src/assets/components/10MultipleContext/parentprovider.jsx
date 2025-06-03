import {useState } from "react";
import UserContext from "./usercontext";
import ThemeContext from "./themecontext";
import ChildMultipleContext from "./childcontext";

const ParentMultipleContext = () => {
  const [user] = useState("Reetha");
  const [theme] = useState("dark");

  return (
    <>
      <UserContext.Provider value={user}>
        <ThemeContext.Provider value={theme}>
          <ChildMultipleContext />
        </ThemeContext.Provider>
      </UserContext.Provider>
    </>
  );
};

export default ParentMultipleContext;
