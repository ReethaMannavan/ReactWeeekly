import  { useState } from 'react';
import AuthContext from './miniconditionalcontext';
import HomePage from './minihomecontext';


const MiniAuthProvider =() => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <HomePage />
    </AuthContext.Provider>
  );
};

export default MiniAuthProvider;