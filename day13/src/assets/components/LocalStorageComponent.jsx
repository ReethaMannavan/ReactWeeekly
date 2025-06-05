import useLocalStorage from "../Hooks/useLocalStorage";

const LocalStorage =()=>{
    const[theme,setTheme]=useLocalStorage('theme','dark');

    const toggleTheme=()=>{
        setTheme(prevTheme=>(prevTheme==="dark"?"light":"dark"))
    }

    return(
        <div className="theme">
             <div className={theme === "light" ? "light-mode" : "dark-mode"}> 
            <p>Current Theme is: {theme}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
            </div>
        </div>
    )
}

export default LocalStorage;