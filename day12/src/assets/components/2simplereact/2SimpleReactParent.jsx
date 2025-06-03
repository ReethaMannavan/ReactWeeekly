import React from 'react';



const MyContext = React.createContext();


export const MyProvider = ({ children }) => {
  const value = "Hello from Context!";

  return (
    <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;