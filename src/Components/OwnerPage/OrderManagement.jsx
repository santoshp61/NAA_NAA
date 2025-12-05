import React, { useEffect, useState } from "react";

const OrderManagement = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/orders")
            .then((res) => res.json())
            .then((data) => setOrders(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="p-6 bg-black min-h-screen text-white rounded-xl shadow-lg">
            {/* Title */}
            <h2 className="text-3xl font-bold text-yellow-400 mb-6 border-b border-yellow-500 pb-2">
                Order Management
            </h2>

            {/* Table */}
            <div className="overflow-x-auto rounded-lg shadow-md border border-yellow-600">
                <table className="w-full text-left">
                    <thead className="bg-yellow-500 text-black font-semibold">
                        <tr>
                            <th className="p-3 border-r border-black">Order ID</th>
                            <th className="p-3 border-r border-black">User</th>
                            <th className="p-3 border-r border-black">Total</th>
                            <th className="p-3">Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {orders.length ? (
                            orders.map((o) => (
                                <tr
                                    key={o._id}
                                    className="border-b border-yellow-800 hover:bg-gray-900 transition"
                                >
                                    <td className="p-3">{o._id}</td>
                                    <td className="p-3">{o.user}</td>
                                    <td className="p-3">Rs {o.totalAmount}</td>
                                    <td className="p-3 text-yellow-300">{o.status}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="p-5 text-center text-yellow-400">
                                    No Orders Found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderManagement;
