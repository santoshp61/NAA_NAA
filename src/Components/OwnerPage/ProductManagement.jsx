import React, { useState, useEffect } from "react";

const ProductManagement = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ name: "", price: "" });

    useEffect(() => {
        fetch("http://localhost:5000/api/products")
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.log(err));
    }, []);

    const addProduct = () => {
        fetch("http://localhost:5000/api/products", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newProduct),
        })
            .then(res => res.json())
            .then(data => setProducts([...products, data]));

        setNewProduct({ name: "", price: "" });
    };

    return (
        <div className="p-5">
            <h2>Product Management</h2>

            {/* Add Product */}
            <div style={{ marginTop: "20px" }}>
                <input
                    type="text"
                    placeholder="Product Name"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                />
                <button onClick={addProduct}>Add Product</button>
            </div>

            {/* Product Table */}
            <table border="1" cellPadding="10" style={{ width: "100%", marginTop: "20px" }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price (Rs)</th>
                    </tr>
                </thead>

                <tbody>
                    {products.length ? (
                        products.map(p => (
                            <tr key={p._id}>
                                <td>{p._id}</td>
                                <td>{p.name}</td>
                                <td>{p.price}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">No Products found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ProductManagement;
