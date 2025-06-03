import { useState } from "react"; 
import ThemeContext from "./Themecontext"; 
import ThemeSwitcher from "./ThemeSwitcher"; 

const ThemeProvider = () => { 
  const [theme, setTheme] = useState("light"); 
return ( 
    <ThemeContext.Provider value={{ theme, setTheme }}> 
     <div className={theme === "light" ? "light-mode" : "dark-mode"}> 
        <h1>Theme: {theme}</h1> 
        <ThemeSwitcher /> 
      </div> 
    </ThemeContext.Provider> 
  ); 
}; 
 
export default ThemeProvider;