import  { useContext } from 'react';
import APIUserContext from './apicontext';

const UserProfile = () => {
  const user = useContext(APIUserContext);

  if (!user) return <p>Loading user name...</p>;

  return <p>👤 Name: {user.name}</p>;
};

export default UserProfile;