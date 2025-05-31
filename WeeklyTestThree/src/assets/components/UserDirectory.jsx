import { useEffect, useState } from "react";

const UserDirectory = () => {

    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [sortasc, setSortasc] = useState(true);
    const [currentpage, setCurrentpage] = useState(1);
    const usersperpage = 3;

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                if (!res.ok) throw new Error('failed to fetch users')
                return res.json();

            })
            .then((data) => setUsers(data))
            .catch((err) => console.error(err));

    }, []);

    const filteredUsers = users.filter((user) => [user.name, user.username, user.email].join('').toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) => sortasc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));


    const indexOfLast = currentpage * usersperpage;
    const indexOfFirst = indexOfLast - usersperpage;
    const currentUsers = filteredUsers.slice(indexOfFirst, indexOfLast);
    const totalPages = Math.ceil(filteredUsers.length / usersperpage);

    return (
        <>
            <div className="user-container">
                <h1>7.User Directory</h1>
                <div className="controls">
                    <input type="text" value={search} placeholder="Search Users.." onChange={(e) => {
                        setSearch(e.target.value);
                        setCurrentpage(1)
                    }}
                        className="search-input" />

                    <button onClick={() => setSortasc(!sortasc)} className="sort-btn">
                        Sort {sortasc ? 'Z-A' : 'A-Z'}
                    </button>

                </div>

                <div className="user-grid">
                    {currentUsers.map((user) => (
                        <div key={user.id} className="user-card">
                            <img
                                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=random`}
                                alt={user.name}
                                className="avatar"
                            />
                            <h2>{user.name}</h2>
                            <p><strong>Username:</strong> {user.username}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                            <p><strong>Phone:</strong> {user.phone}</p>
                            <p><strong>Company:</strong> {user.company.name}</p>
                        </div>
                    ))}
                </div>

                <div className="pagination">
                    <button
                        onClick={() => setCurrentpage((p) => Math.max(p - 1, 1))}
                        disabled={currentpage === 1}
                    >
                        Prev
                    </button>

                    <span>Page {currentpage} of {totalPages}</span>

                    <button
                        onClick={() => setCurrentpage((p) => Math.min(p + 1, totalPages))}
                        disabled={currentpage === totalPages}
                    >
                        Next
                    </button>
                </div>


            </div>


        </>
    )



}

export default UserDirectory;