import useFetch from "../Hooks/useFetch";

const UsersList = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}({user.email})</li>
      ))}
    </ul>
  );
};
export default UsersList;
