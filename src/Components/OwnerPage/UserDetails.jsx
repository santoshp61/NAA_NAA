import React, { useEffect, useState } from "react";

const UserDetails = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/users")
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold text-yellow-500 mb-6">User Details</h2>

            <div className="overflow-x-auto bg-black p-4 rounded-xl shadow-lg border border-yellow-600">
                <table className="w-full text-left text-yellow-300">
                    <thead className="border-b border-yellow-500 text-yellow-400">
                        <tr>
                            <th className="p-3">User ID</th>
                            <th className="p-3">Name</th>
                            <th className="p-3">Phone</th>
                            <th className="p-3">Joined On</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.length > 0 ? (
                            users.map((u) => (
                                <tr key={u._id} className="hover:bg-yellow-600 hover:text-black transition">
                                    <td className="p-3">{u._id}</td>
                                    <td className="p-3">{u.name}</td>
                                    <td className="p-3">{u.phone}</td>
                                    <td className="p-3">{u.createdAt}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center p-4">No users found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserDetails;
