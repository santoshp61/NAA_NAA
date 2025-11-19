import React from "react";

const womensItems = [
  { name: "Elegant Dress", image: "Image/high-fashion-look-glamor-stylish-sexy-smiling-beautiful-young-woman-model-summer-black-hipster-dress.jpg", price: 6999 },
  { name: "Casual Outfit", image: "Image/young-woman-beautiful-red-dress.jpg", price: 1199 },
  { name: "Party Wear", image: "Image/fashionable-girl-red.jpg", price: 2799 },
  { name: "Evening Gown", image: "Image/young-woman-beautiful-yellow-dress.jpg", price: 1499 },
  { name: "Traditional Dress", image: "Image/woman-traditional-dress.jpg", price: 2499 },
  { name: "Office Attire", image: "Image/office-woman-outfit.jpg", price: 2399 },
  { name: "Floral Summer Dress", image: "Image/floral-summer-dress.jpg", price: 3000 },
  { name: "Long Maxi Dress", image: "Image/long-maxi-dress.jpg", price: 799 },
  { name: "Denim Dress", image: "Image/denim-dress.jpg", price: 2899 },
  { name: "Boho Style Dress", image: "Image/boho-style-dress.jpg", price: 2950 },
  { name: "Winter Sweater Dress", image: "Image/winter-sweater-dress.jpg", price: 3100 },
  { name: "Chic Cocktail Dress", image: "Image/chic-cocktail-dress.jpg", price: 5199 },
  { name: "Silk Saree", image: "Image/silk-saree.jpg", price: 3999 },
  { name: "Formal Black Dress", image: "Image/formal-black-dress.jpg", price: 2460 },
  { name: "Trendy Two-Piece Set", image: "Image/trendy-two-piece.jpg", price: 1700 },
];

const WomensPage = () => {
  return (
    <section className="relative w-full py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 drop-shadow-lg">
          Women's Full Collection
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {womensItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl shadow-lg border border-gray-700 hover:border-pink-400/60 hover:shadow-pink-500/30 p-5 transition-all duration-300 hover:-translate-y-2"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-60 object-cover rounded-xl mb-4 hover:scale-105 transition-transform duration-500"
              />
              <h3 className="text-xl font-semibold text-white">{item.name}</h3>
              <p className="text-lg text-gray-300 mt-2">
                रु {item.price.toLocaleString()}
              </p>
              <button className="mt-5 w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-purple-700 hover:to-pink-700 text-white py-2.5 rounded-lg font-medium shadow-md hover:shadow-pink-500/40 transition-all duration-300">
                Order Now
              </button>
            </div>
          ))}
        </div>

        {/* Decorative Glow */}
        <div className="absolute inset-0 -z-10 blur-3xl opacity-30 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"></div>
      </div>
    </section>
  );
};

export default WomensPage;
