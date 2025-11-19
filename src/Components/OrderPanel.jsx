import React, { useState } from "react";

const OrderPanel = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");

  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 text-white rounded-2xl max-w-5xl w-full p-6 sm:p-8 shadow-2xl relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-3xl text-gray-400 hover:text-white"
        >
          ×
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* LEFT SIDE — IMAGE + QUANTITY + SIZE */}
          <div className="flex flex-col items-center">
            {/* Product Image */}
            <div className="w-full h-72 sm:h-96 bg-gray-800 rounded-xl flex items-center justify-center overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Quantity + Size Section */}
            <div className="w-full mt-6 p-4 bg-gray-800 rounded-xl text-center">
              <h3 className="text-lg font-semibold">QUANTITY & SIZE</h3>

              {/* Quantity */}
              <div className="mt-4">
                <label className="block mb-1 text-sm">Select Quantity</label>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-24 text-black px-3 py-2 rounded-lg"
                />
              </div>

              {/* Size Dropdown */}
              <div className="mt-4">
                <label className="block mb-1 text-sm">Select Size</label>
                <select
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  className="w-40 text-black px-3 py-2 rounded-lg"
                >
                  <option value="">Choose size</option>
                  <option value="S">Small (S)</option>
                  <option value="M">Medium (M)</option>
                  <option value="L">Large (L)</option>
                  <option value="XL">Extra Large (XL)</option>
                </select>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — DETAILS + BUTTONS */}
          <div className="flex flex-col justify-between">

            {/* Details */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">DETAILS</h2>
              <hr className="border-gray-700 mb-4" />

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {product.description || "This is a premium clothing item with high-quality fabric and excellent comfort."}
              </p>

              <p className="mt-4 text-xl font-semibold text-blue-400">
                Price: {product.price}
              </p>
            </div>

            {/* Buttons Row */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <button className="bg-gray-700 hover:bg-gray-600 py-3 rounded-lg font-semibold">
                Add to Cart
              </button>

              <button className="bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold">
                Buy Now
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default OrderPanel;
