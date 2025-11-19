import React from "react";

const salesItems = [
  { name: "Weekly Sales", image: "Image/Sales_1.jpg", price: "Up to 5% Discount" },
  { name: "Monthly Sales", image: "Image/Sales_2.jpg", price: "Up to 10% Discount" },
  { name: "Summer Clearance", image: "Image/Sales_3.jpg", price: "Up to 12% Discount" },
  { name: "Winter Sales", image: "Image/Winter Coat.jpg", price: "Up to 12% Discount" },
  { name: "Festive Discount", image: "Image/Accessories_1.jpg", price: "Up to 18% Discount" },
  { name: "Limited Edition", image: "Image/Formal Suit.jpg", price: "Up to 5% Discount" },
  { name: "Flash Sale", image: "Image/Sportswear.jpg", price: "Up to 25% Discount" },
  { name: "Coming Soon", image: "Image/Coming  Soon.png", price: "Coming Soon" },
  { name: "Coming Soon", image: "Image/Coming  Soon.png", price: "Coming Soon" },
];

const SalesPage = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-lg">
          Sales Collection
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {salesItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-blue-600/30 p-5 transition-all duration-300 border border-gray-700 hover:-translate-y-2"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-60 object-cover rounded-xl mb-4 hover:scale-105 transition-transform duration-500"
              />
              <h3 className="text-xl font-semibold text-white">{item.name}</h3>
              <p className="text-lg text-gray-300 mt-2">{item.price}</p>
              <button className="mt-5 w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-700 hover:to-blue-700 text-white py-2.5 rounded-lg font-medium shadow-md hover:shadow-blue-500/40 transition-all duration-300">
                Explore Now
              </button>
            </div>
          ))}
        </div>

        {/* Decorative Glow Effect */}
        <div className="absolute inset-0 -z-10 blur-3xl opacity-30 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      </div>
    </section>
  );
};

export default SalesPage;
