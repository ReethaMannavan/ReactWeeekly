

function UserList({ users, editUser, deleteUser }) {
  return (
    <div className="user-list">
      {users.map((user) => (
        <div key={user.id} className="user-item">
          <p><b>{user.name}</b> ({user.email})</p>
          <button onClick={() => editUser(user)}>Edit</button>
          <button onClick={() => deleteUser(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default UserList;
