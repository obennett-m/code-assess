import React, { useState, useEffect } from "react";

const UserList: React.FC = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        setLoading(true);
        fetch("<http://localhost:3000/api/users>")
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch((err) => {
                setError("Failed to fetch users");
                console.error(err);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h1>User List</h1>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
