import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const SIZES = ["S", "M", "L", "XL"];

const OrderPanel = ({ product, onClose, onAddToCart, onBuyNow }) => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("M");

  useEffect(() => {
    setQuantity(1);
    setSize("M");
  }, [product]);

  if (!product) return null;

  const unitPrice = Number(product.price?.replace(/[^0-9]/g, "") || 0);
  const totalPrice = quantity * unitPrice;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="relative w-full max-w-5xl rounded-2xl bg-gray-900 text-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-700 px-6 py-4">
          <h2 className="text-lg font-semibold">Place Order</h2>
          <button
            onClick={onClose}
            className="text-3xl text-gray-400 hover:text-white"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2">
          {/* LEFT IMAGE */}
          <div className="flex justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="h-72 w-72 rounded-xl object-cover bg-gray-800"
            />
          </div>

          {/* RIGHT INFO */}
          <div className="space-y-5">
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-2xl font-bold text-blue-400">{product.price}</p>

            {/* Size */}
            <div>
              <p className="mb-2 text-sm text-gray-300">Size</p>
              <div className="flex gap-2">
                {SIZES.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`rounded-lg border px-4 py-1 transition ${size === s
                        ? "border-blue-500 bg-blue-500/10 text-blue-400"
                        : "border-gray-700 text-gray-400 hover:border-gray-500"
                      }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <p className="mb-2 text-sm text-gray-300">Quantity</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="h-9 w-9 rounded-lg border border-gray-700 hover:bg-gray-800"
                >
                  −
                </button>
                <span className="min-w-[24px] text-center font-semibold">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="h-9 w-9 rounded-lg border border-gray-700 hover:bg-gray-800"
                >
                  +
                </button>
              </div>
            </div>

            {/* Total */}
            <div className="flex items-center justify-between border-t border-gray-700 pt-4 font-semibold">
              <span className="text-gray-300">Total</span>
              <span className="text-xl text-blue-400">Rs. {totalPrice}</span>
            </div>

            {/* You May Like */}
            {product.related?.length > 0 && (
              <div className="border-t border-gray-700 pt-6">
                <h4 className="mb-3 text-sm font-semibold text-gray-300">
                  You may like
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  {[...product.related]
                    .sort(() => 0.5 - Math.random())
                    .slice(0, 3)
                    .map((item) => (
                      <div
                        key={item.id}
                        className="cursor-pointer rounded-lg bg-gray-800 p-2 hover:bg-gray-700"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-20 w-full rounded-md object-cover"
                        />
                        <p className="mt-1 truncate text-xs text-gray-300">
                          {item.name}
                        </p>
                        <p className="text-xs text-blue-400">{item.price}</p>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex gap-4 border-t border-gray-700 px-6 py-4">
          <button
            onClick={() => onAddToCart?.({ product, quantity, size })}
            className="flex-1 rounded-lg bg-gray-700 py-3 font-semibold hover:bg-gray-600"
          >
            Add to Cart
          </button>
          <button
            onClick={() => onBuyNow?.({ product, quantity, size })}
            className="flex-1 rounded-lg bg-blue-600 py-3 font-semibold hover:bg-blue-700"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

OrderPanel.propTypes = {
  product: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  onAddToCart: PropTypes.func,
  onBuyNow: PropTypes.func,
};

export default OrderPanel;
