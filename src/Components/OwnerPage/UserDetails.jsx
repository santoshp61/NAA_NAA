import React, { useEffect, useState } from "react";

const UserDetails = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/users")
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(err => console.log(err));
    }, []);

    // Format joined date
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric"
        });
    };

    return (
        <div className="min-h-screen bg-black p-8 text-yellow-500">

            {/* Title */}
            <h1 className="text-3xl font-bold mb-6">
                User Details
            </h1>

            {/* User Table Box */}
            <div className="overflow-x-auto bg-gray-900 p-6 rounded-xl border border-yellow-600 shadow-lg">

                <table className="w-full text-left">
                    <thead className="border-b border-yellow-600">
                        <tr className="text-yellow-400">
                            <th className="p-3">Profile</th>
                            <th className="p-3">User ID</th>
                            <th className="p-3">Name</th>
                            <th className="p-3">Phone</th>
                            <th className="p-3">Role</th>
                            <th className="p-3">Joined On</th>
                            <th className="p-3">Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.length > 0 ? (
                            users.map((u) => (
                                <tr
                                    key={u._id}
                                    className="border-b border-gray-700 hover:bg-yellow-600 hover:text-black transition"
                                >
                                    {/* Avatar */}
                                    <td className="p-3">
                                        <img
                                            src={u.avatar || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
                                            alt="User Avatar"
                                            className="w-10 h-10 rounded-full border border-yellow-500"
                                        />
                                    </td>

                                    {/* User ID */}
                                    <td className="p-3">{u._id}</td>

                                    {/* Name */}
                                    <td className="p-3 font-semibold">{u.name}</td>

                                    {/* Phone */}
                                    <td className="p-3">{u.phone || "N/A"}</td>

                                    {/* Role */}
                                    <td className="p-3">
                                        <span className="px-3 py-1 rounded-full bg-yellow-700 text-black text-sm font-bold">
                                            {u.role || "Customer"}
                                        </span>
                                    </td>

                                    {/* Joined Date */}
                                    <td className="p-3">{formatDate(u.createdAt)}</td>

                                    {/* Status */}
                                    <td className="p-3">
                                        <span className={`px-3 py-1 rounded-full text-sm font-bold
                                            ${u.active ? "bg-green-500 text-black" : "bg-red-600 text-white"}
                                        `}>
                                            {u.active ? "Active" : "Inactive"}
                                        </span>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="text-center p-4 text-yellow-300">
                                    No users found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default UserDetails;
