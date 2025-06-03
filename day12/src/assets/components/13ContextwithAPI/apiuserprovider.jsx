import { useState, useEffect } from 'react';
import APIUserContext from './apicontext';
import UserProfile from './userprofile';


const UserProvider = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
  
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.error('Error fetching user:', err));
  }, []);

  return (
    <APIUserContext.Provider value={user}>
      <h2>User Dashboard</h2>
      <UserProfile />
    </APIUserContext.Provider>
  );
};

export default UserProvider;