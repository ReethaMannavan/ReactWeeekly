import  { useState } from 'react';
import AuthContext from './conditionalcontext';
import HomePage from './homecontext';


const AuthProvider =() => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <HomePage />
    </AuthContext.Provider>
  );
};

export default AuthProvider;