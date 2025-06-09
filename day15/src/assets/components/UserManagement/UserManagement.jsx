 import { useState,useEffect } from "react";
 import UserForm from "./UserForm";
 import UserList from "./UserList";
 import EditUserModal from "./UserModel";
 import './user.css'
 
 
 
 
 const UserManagement=()=>{
    const [users, setUsers] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.slice(0, 5)))
      .catch((err) => console.error(err));
  }, []);

  const addUser = (user) => {
    setUsers([...users, { ...user, id: Date.now() }]);
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
    setIsEditing(false);
    setSelectedUser(null);
  };

  const deleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  const editUser = (user) => {
    setSelectedUser(user);
    setIsEditing(true);
  };

  return (
    <div className="userapp">
      <h1>4. User Management System</h1>
      <UserForm addUser={addUser} />
      <UserList users={users} editUser={editUser} deleteUser={deleteUser} />
      {isEditing && (
        <EditUserModal
          user={selectedUser}
          updateUser={updateUser}
          closeModal={() => setIsEditing(false)}
        />
      )}
    </div>
  );
}

export default UserManagement;