import React, { useEffect, useState } from "react";

const OrderManagement = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/orders")
            .then(res => res.json())
            .then(data => setOrders(data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="p-5">
            <h2>Order Management</h2>

            <table border="1" cellPadding="10" style={{ width: "100%", marginTop: "20px" }}>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>User</th>
                        <th>Total</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    {orders.length ? (
                        orders.map(o => (
                            <tr key={o._id}>
                                <td>{o._id}</td>
                                <td>{o.user}</td>
                                <td>{o.totalAmount}</td>
                                <td>{o.status}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No Orders found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default OrderManagement;
