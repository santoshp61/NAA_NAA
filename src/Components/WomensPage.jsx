import React, { useState } from "react";
import OrderPanel from "./OrderPanel"; // Make sure this points to your actual OrderPanel component

const womensItems = [
  { id: 1, name: "Elegant Dress", image: "Image/high-fashion-look-glamor-stylish-sexy-smiling-beautiful-young-woman-model-summer-black-hipster-dress.jpg", price: 6999 },
  { id: 2, name: "Casual Outfit", image: "Image/young-woman-beautiful-red-dress.jpg", price: 1199 },
  { id: 3, name: "Party Wear", image: "Image/fashionable-girl-red.jpg", price: 2799 },
  { id: 4, name: "Evening Gown", image: "Image/young-woman-beautiful-yellow-dress.jpg", price: 1499 },
  { id: 5, name: "Traditional Dress", image: "Image/woman-traditional-dress.jpg", price: 2499 },
  { id: 6, name: "Office Attire", image: "Image/office-woman-outfit.jpg", price: 2399 },
  { id: 7, name: "Floral Summer Dress", image: "Image/floral-summer-dress.jpg", price: 3000 },
  { id: 8, name: "Long Maxi Dress", image: "Image/long-maxi-dress.jpg", price: 799 },
  { id: 9, name: "Denim Dress", image: "Image/denim-dress.jpg", price: 2899 },
  { id: 10, name: "Boho Style Dress", image: "Image/boho-style-dress.jpg", price: 2950 },
  { id: 11, name: "Winter Sweater Dress", image: "Image/winter-sweater-dress.jpg", price: 3100 },
  { id: 12, name: "Chic Cocktail Dress", image: "Image/chic-cocktail-dress.jpg", price: 5199 },
  { id: 13, name: "Silk Saree", image: "Image/silk-saree.jpg", price: 3999 },
  { id: 14, name: "Formal Black Dress", image: "Image/formal-black-dress.jpg", price: 2460 },
  { id: 15, name: "Trendy Two-Piece Set", image: "Image/trendy-two-piece.jpg", price: 1700 },
];

const WomensPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenPanel = (product) => {
    setSelectedProduct(product);
  };

  const handleClosePanel = () => {
    setSelectedProduct(null);
  };

  return (
    <section className="relative w-full py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-lg">
          Women's Full Collection
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {womensItems.map((item) => (
            <div
              key={item.id}
              className="bg-gray-800 rounded-2xl shadow-lg border border-gray-700 hover:border-blue-400/60 hover:shadow-blue-500/30 p-5 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Clickable Image Section */}
              <div
                onClick={() => handleOpenPanel(item)}
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

              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-lg text-gray-300 mt-2">
                रु {item.price.toLocaleString()}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative Glow */}
        <div className="absolute inset-0 -z-10 blur-3xl opacity-30 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      </div>

      {/* Render OrderPanel if a product is selected */}
      {selectedProduct && (
        <OrderPanel product={selectedProduct} onClose={handleClosePanel} />
      )}
    </section>
  );
};

export default WomensPage;
