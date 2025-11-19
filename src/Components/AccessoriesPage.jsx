import React from "react";

const accessoriesItems = [
  { name: "Men Accessories", image: "Image/Accessories_1.jpg", price: "Up to 11% Discount" },
  { name: "Female Accessories", image: "Image/Accessories_for_female.jpg", price: "Up to 25% Discount" },
  { name: "Makeup Accessories", image: "Image/Accessories_for_women.jpg", price: "Up to 30% Discount" },
  { name: "GentalMen Accessories", image: "Image/Accessories_for _men_care.jpg", price: "Up to 18% Discount" },
  { name: "Package Accessories", image: "Image/model-career-kit-still-life.jpg", price: "Up to 5% Discount" },
  { name: "Leather Wallet", image: "Image/leather-wallet.jpg", price: "Up to 50% Discount" },
  { name: "Sunglasses", image: "Image/sunglasses.jpg", price: "Up to 3% Discount" },
  { name: "Men's Watch", image: "Image/mens-watch.jpg", price: "Up to 11% Discount" },
  { name: "Handbag", image: "Image/handbag.jpg", price: "Up to 15% Discount" },
  { name: "Bracelet", image: "Image/bracelet.jpg", price: "Up to 9% Discount" },
  { name: "Necklace", image: "Image/necklace.jpg", price: "Up to 7% Discount" }
];

const AccessoriesPage = () => {
  return (
    <section className="w-full py-12 bg-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-purple-400 drop-shadow-lg">
          Accessories Collection
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {accessoriesItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg p-4 hover:shadow-purple-500/50 transition-all"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-60 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-xl font-semibold text-gray-100 mt-4">
                {item.name}
              </h3>
              <p className="text-lg text-gray-400 mt-2">{item.price}</p>
              <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition shadow-md hover:shadow-purple-500/50">
                Explore Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccessoriesPage;
