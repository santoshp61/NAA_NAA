import React, { useState, useEffect } from "react";

const ProductManagement = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ name: "", price: "", image: null });
    const [preview, setPreview] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/api/products")
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.log(err));
    }, []);

    const addProduct = () => {
        const formData = new FormData();
        formData.append("name", newProduct.name);
        formData.append("price", newProduct.price);
        formData.append("image", newProduct.image);

        fetch("http://localhost:5000/api/products", {
            method: "POST",
            body: formData,
        })
            .then(res => res.json())
            .then(data => setProducts([...products, data]));

        setNewProduct({ name: "", price: "", image: null });
        setPreview(null);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setNewProduct({ ...newProduct, image: file });

        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    };

    return (
        <div className="min-h-screen bg-black text-white p-8">

            {/* Title */}
            <h1 className="text-3xl font-bold text-yellow-500 mb-6 text-center">
                Product Management
            </h1>

            {/* Add Product Box (Centered) */}
            <div className="flex justify-center mb-10">
                <div className="bg-gray-900 border border-yellow-600 p-6 rounded-xl shadow-lg w-full max-w-xl">

                    <h2 className="text-xl font-semibold text-yellow-400 mb-4 text-center">
                        Add New Product
                    </h2>

                    <div className="flex flex-col gap-4">

                        {/* Product Name */}
                        <input
                            type="text"
                            placeholder="Product Name"
                            value={newProduct.name}
                            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                            className="p-3 rounded bg-black border border-yellow-700 text-white"
                        />

                        {/* Price */}
                        <input
                            type="number"
                            placeholder="Price (Rs)"
                            value={newProduct.price}
                            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                            className="p-3 rounded bg-black border border-yellow-700 text-white"
                        />

                        {/* Image Upload */}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="p-2 rounded bg-black border border-yellow-700 text-white"
                        />

                        {/* Image Preview */}
                        {preview && (
                            <div className="flex justify-center">
                                <img
                                    src={preview}
                                    alt="preview"
                                    className="w-32 h-32 object-cover rounded border border-yellow-600"
                                />
                            </div>
                        )}

                        {/* Add Button */}
                        <button
                            onClick={addProduct}
                            className="bg-yellow-600 text-black font-bold py-2 rounded hover:bg-yellow-500"
                        >
                            Add Product
                        </button>
                    </div>
                </div>
            </div>

            {/* Product Table */}
            <div className="bg-gray-900 p-6 rounded-xl border border-yellow-700 shadow-lg">
                <h2 className="text-xl font-semibold text-yellow-400 mb-4">
                    Product List
                </h2>

                <table className="w-full border border-yellow-700 text-left">
                    <thead className="bg-black border-b border-yellow-700">
                        <tr>
                            <th className="p-3 text-yellow-500">Image</th>
                            <th className="p-3 text-yellow-500">Name</th>
                            <th className="p-3 text-yellow-500">Price (Rs)</th>
                        </tr>
                    </thead>

                    <tbody>
                        {products.length > 0 ? (
                            products.map((p) => (
                                <tr key={p._id} className="border-b border-gray-700">
                                    <td className="p-3">
                                        {p.image ? (
                                            <img src={p.image} alt="product" className="w-16 h-16 object-cover rounded" />
                                        ) : (
                                            "No Image"
                                        )}
                                    </td>
                                    <td className="p-3">{p.name}</td>
                                    <td className="p-3">{p.price}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" className="p-4 text-center text-gray-400">
                                    No Products Found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ProductManagement;
