import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost/gaa_modaa_api/api"; // adjust to your backend path

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // Update cart in localStorage when changed
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const updateQuantity = (id, qty) => {
    setCart(
      cart.map((item) => (item.id === id ? { ...item, quantity: qty } : item))
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const getTotal = () =>
    cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  const handleCheckout = async () => {
    if (cart.length === 0) return alert("Cart is empty!");
    setLoading(true);
    try {
      await axios.post(`${API_URL}/orders.php`, {
        action: "place_order",
        user_id: 1, // static for now
        items: cart,
        total: getTotal(),
      });
      setMessage("✅ Order placed successfully!");
      clearCart();
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to place order.");
    } finally {
      setLoading(false);
    }
  };

  const handleCancelOrder = async () => {
    try {
      await axios.post(`${API_URL}/orders.php`, {
        action: "cancel_order",
        user_id: 1,
      });
      setMessage("⚠️ Order cancelled successfully!");
      clearCart();
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to cancel order.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-200 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-white tracking-wide">
          🛒 Your Cart
        </h1>

        {cart.length === 0 ? (
          <p className="text-center text-gray-400 text-lg">
            Your cart is empty. Add something amazing!
          </p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-gray-800/80 border border-gray-700 rounded-xl shadow-lg p-4 hover:shadow-blue-900/40 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={`http://localhost/gaa_modaa_api/${item.image}`}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg border border-gray-700"
                  />
                  <div>
                    <h2 className="text-lg font-semibold text-white">
                      {item.name}
                    </h2>
                    <p className="text-blue-400 font-medium">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value))
                    }
                    className="w-16 text-center bg-gray-900 border border-gray-700 rounded-md text-gray-200 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  />
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-400 font-semibold transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="flex justify-between items-center mt-10 border-t border-gray-700 pt-6">
              <h2 className="text-2xl font-bold text-white">
                Total:{" "}
                <span className="text-blue-400">${getTotal()}</span>
              </h2>
              <div className="space-x-4">
                <button
                  onClick={handleCheckout}
                  disabled={loading}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md hover:shadow-blue-900/40 transition-all duration-300"
                >
                  {loading ? "Processing..." : "Place Order"}
                </button>
                <button
                  onClick={handleCancelOrder}
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg shadow-md hover:shadow-red-900/40 transition-all duration-300"
                >
                  Cancel Order
                </button>
              </div>
            </div>

            {message && (
              <p className="text-center mt-6 text-blue-400 font-medium animate-pulse">
                {message}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
