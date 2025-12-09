import React, { useEffect, useState } from "react";

const TotalRevenue = () => {
    const [orders, setOrders] = useState([]);
    const [totalRevenue, setTotalRevenue] = useState(0);

    useEffect(() => {
        fetch("http://localhost:5000/api/orders")
            .then(res => res.json())
            .then(data => {
                setOrders(data);

                let deliveredOrders = data.filter(o => o.status === "Delivered");

                let revenue = deliveredOrders.reduce(
                    (sum, order) => sum + Number(order.totalAmount),
                    0
                );

                setTotalRevenue(revenue);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="min-h-screen bg-black text-white p-8">

            {/* Title */}
            <h1 className="text-3xl font-bold text-yellow-500 mb-8">
                Total Revenue
            </h1>

            {/* Revenue Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Revenue Boxnpm  */}
                <div className="bg-gray-900 border border-yellow-700 p-6 rounded-xl shadow-lg">
                    <h2 className="text-xl text-yellow-400 font-semibold">Total Revenue</h2>
                    <p className="text-3xl font-bold mt-3 text-yellow-500">
                        Rs. {totalRevenue}
                    </p>
                </div>

                {/* Total Orders */}
                <div className="bg-gray-900 border border-yellow-700 p-6 rounded-xl shadow-lg">
                    <h2 className="text-xl text-yellow-400 font-semibold">Total Orders</h2>
                    <p className="text-3xl font-bold mt-3 text-yellow-500">
                        {orders.length}
                    </p>
                </div>

                {/* Delivered Orders */}
                <div className="bg-gray-900 border border-yellow-700 p-6 rounded-xl shadow-lg">
                    <h2 className="text-xl text-yellow-400 font-semibold">Delivered Orders</h2>
                    <p className="text-3xl font-bold mt-3 text-green-400">
                        {orders.filter(o => o.status === "Delivered").length}
                    </p>
                </div>
            </div>

            {/* Revenue Table */}
            <div className="mt-10 bg-gray-900 p-6 rounded-xl border border-yellow-700 shadow-lg">
                <h2 className="text-xl font-semibold text-yellow-400 mb-4">Revenue Details</h2>

                <table className="w-full border border-yellow-700 text-left">
                    <thead className="bg-black border-b border-yellow-700">
                        <tr>
                            <th className="p-3 text-yellow-500">Order ID</th>
                            <th className="p-3 text-yellow-500">User</th>
                            <th className="p-3 text-yellow-500">Amount (Rs)</th>
                            <th className="p-3 text-yellow-500">Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {orders.length > 0 ? (
                            orders.map((o) => (
                                <tr key={o._id} className="border-b border-gray-700">
                                    <td className="p-3">{o._id}</td>
                                    <td className="p-3">{o.user}</td>
                                    <td className="p-3">{o.totalAmount}</td>
                                    <td className="p-3 text-yellow-400">{o.status}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="p-4 text-center text-gray-400">
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

export default TotalRevenue;
