import { useContext } from "react";
import UserContext from "./usercontext";
import ThemeContext from "./themecontext";

const ChildMultipleContext = () => {
  const user = useContext(UserContext);
  const theme = useContext(ThemeContext);
  console.log(user);
  console.log(theme);
  
  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "#333" : "#eee",
        color: theme === "dark" ? "#fff" : "#000",
        padding: "1rem",
      }}
    >
      <h2>Welcome, {user}!</h2>
      <p>Current theme: {theme}</p>
   
    </div>
  );
};

export default ChildMultipleContext;
