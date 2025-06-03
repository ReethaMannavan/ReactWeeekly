import { useState } from "react"; 
import ThemeContext from "./MiniThemeContext"; 
import ThemeSwitcher from "./MiniThemeSwitcher"; 

const MiniThemeProvider = () => { 
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
 
export default MiniThemeProvider;