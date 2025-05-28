import { useState } from 'react';


const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
    <h2 className='projectthree'>Project 3</h2>
    <h2 className='dark-light'> Dark/Light Theme Toggle</h2>
      <div className={`container ${isDarkMode ? 'dark' : 'light'}`}>

      <button 
        className="theme-toggle"
        onClick={() => setIsDarkMode(!isDarkMode)}>
      
        <div className={`icon-container ${isDarkMode ? 'moon' : 'sun'}`}>
          <div className="icon"></div>
        </div>
      </button>
    </div>
    </>
  
  );
};

export default ThemeToggle;