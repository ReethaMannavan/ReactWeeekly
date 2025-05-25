import React, { useState } from 'react';


const LoginToggle = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [inputName, setInputName] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const handleLogin = () => {
    if (inputName.trim() && inputPassword.trim()) {
      setUsername(inputName.trim());
      setIsLoggedIn(true);
    } else {
      alert('Please enter both username and password.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setInputName('');
    setInputPassword('');
  };

  return (
    <>
     <div className="container">
      <h1 className="main-heading">User Login System</h1>
      <div className="card">
        {isLoggedIn ? (
          <>
            <h2 className="welcome-message">Welcome, {username}!</h2>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <h2 className="sub-heading">Please Login</h2>
            <input
              type="text"
              className="input-field"
              placeholder="Enter your username"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
            />
            <input
              type="password"
              className="input-field"
              placeholder="Enter your password"
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
            />
            <button className="login-button" onClick={handleLogin}>Login</button>
          </>
        )}
      </div>
    </div>
    </>
   
  );
};

export default LoginToggle;