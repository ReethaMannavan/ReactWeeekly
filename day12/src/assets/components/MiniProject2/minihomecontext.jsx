import { useContext } from 'react';
import AuthContext from './miniconditionalcontext';

const HomePage = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Welcome!!!</h2>
      {isLoggedIn ? (
        <>
          <p>👤 You are logged in!</p>
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </>
      ) : (
        <>
          <p>🧑‍💻 Please log in to continue.</p>
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        </>
      )}
    </div>
  );
};

export default HomePage;