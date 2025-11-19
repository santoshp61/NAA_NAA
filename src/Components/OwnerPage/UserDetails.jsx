import React, { useEffect, useState } from "react";

const UserDetails = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch users from backend
        fetch("http://localhost:5000/api/users")
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="p-5">
            <h2>User Details</h2>
            <table border="1" cellPadding="10" style={{ width: "100%", marginTop: "20px" }}>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Joined On</th>
                    </tr>
                </thead>

                <tbody>
                    {users.length > 0 ? (
                        users.map((u) => (
                            <tr key={u._id}>
                                <td>{u._id}</td>
                                <td>{u.name}</td>
                                <td>{u.phone}</td>
                                <td>{u.createdAt}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No users found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default UserDetails;
