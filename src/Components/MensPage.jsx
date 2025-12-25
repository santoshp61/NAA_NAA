import React, { useState } from "react";
import OrderPanel from "./OrderPanel";

const mensItems = [
  { name: "Formal Suit", image: "/Image/Formal Suit.jpg", price: 1999 },
  { name: "Casual Jacket", image: "/Image/Casual Jacket.jpg", price: 8999 },
  { name: "Sportswear", image: "/Image/Sportswear.jpg", price: 999 },
  { name: "Winter Coat", image: "/Image/Winter Coat.jpg", price: 5999 },
  { name: "Brown Pant", image: "/Image/brown-pants.jpg", price: 999 },
  { name: "Denim Jacket", image: "/Image/denim-jacket.jpg", price: 1199 },
  { name: "Classic Shirt", image: "/Image/classic-shirt.jpg", price: 799 },
  { name: "Casual T-Shirt", image: "/Image/casual-tshirt.jpg", price: 599 },
  { name: "Leather Jacket", image: "/Image/leather-jacket.jpg", price: 4999 },
  { name: "Slim Fit Jeans", image: "/Image/slim-fit-jeans.jpg", price: 999 },
  { name: "Traditional Kurta", image: "/Image/traditional-kurta.jpg", price: 1699 },
  { name: "Formal Shoes", image: "/Image/formal-shoes.jpg", price: 1299 },
  { name: "Hoodie Sweatshirt", image: "/Image/hoodie-sweatshirt.jpg", price: 1499 },
  { name: "Polo Shirt", image: "/Image/polo-shirt.jpg", price: 899 },
  { name: "Blazer Jacket", image: "/Image/blazer-jacket.jpg", price: 1999 },
];

const MensPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openOrderPanel = (product) => {
    setSelectedProduct(product);
  };

  const closePanel = () => {
    setSelectedProduct(null);
  };

  return (
    <section className="w-full py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-lg">
          Men's Full Collection
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {mensItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl shadow-lg border border-gray-700 hover:border-blue-400/60 hover:shadow-blue-500/30 p-5 transition-all duration-300 hover:-translate-y-2"
            >
              <div
                onClick={() => openOrderPanel(item)}
                className="cursor-pointer w-full h-60 overflow-hidden rounded-xl mb-4 hover:scale-105 transition-transform duration-500 relative"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/25 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 text-white font-bold text-lg">
                  Click to Order
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white">
                {item.name}
              </h3>
              <p className="text-lg text-gray-300 mt-2">
                रु {item.price.toLocaleString()}
              </p>
            </div>
          ))}
        </div>

        <div className="absolute inset-0 -z-10 blur-3xl opacity-30 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      </div>

      {/* OrderPanel – logic only, no theme change */}
      {selectedProduct && (
        <OrderPanel
          product={selectedProduct}
          onClose={closePanel}
        />
      )}
    </section>
  );
};

export default MensPage;
