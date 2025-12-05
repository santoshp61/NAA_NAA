import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const categories = [
  {
    title: "Women's Collection",
    link: "/womens",
    items: [
      { name: "Elegant Dress", image: "Image/high-fashion-look-glamor-stylish-sexy-smiling-beautiful-young-woman-model-summer-black-hipster-dress.jpg", price: "₨ 6,499" },
      { name: "Casual Outfit", image: "Image/young-woman-beautiful-red-dress.jpg", price: "₨ 3,899" },
      { name: "Party Wear", image: "Image/fashionable-girl-red.jpg", price: "₨ 8,999" },
      { name: "Evening Gown", image: "Image/young-woman-beautiful-yellow-dress.jpg", price: "₨ 11,499" },
      { name: "Traditional Dress", image: "Image/woman-traditional-dress.jpg", price: "₨ 5,299" }
    ]
  },
  {
    title: "Men's Collection",
    link: "/mens",
    items: [
      { name: "Formal Suit", image: "Image/Formal_Suit.jpg", price: "₨ 26,499" },
      { name: "Casual Jacket", image: "Image/Casual_Jacket.jpg", price: "₨ 11,999" },
      { name: "Sportswear", image: "Image/Sportswear.jpg", price: "₨ 8,499" },
      { name: "Winter Coat", image: "Image/Winter_Coat.jpg", price: "₨ 18,999" },
      { name: "Brown Pant", image: "Image/brown-pants.jpg", price: "₨ 15,499" }
    ]
  },
  {
    title: "Accessories",
    link: "/accessories",
    items: [
      { name: "Men Accessories Pack", image: "Image/Accessories_1.jpg", price: "₨ 2,999" },
      { name: "Female Accessories Pack", image: "Image/Accessories_for_female.jpg", price: "₨ 3,499" },
      { name: "Makeup Accessories Pack", image: "Image/Accessories_for_women.jpg", price: "₨ 2,799" },
      { name: "Gentlemen Accessories Pack", image: "Image/Accessories_for_men_care.jpg", price: "₨ 4,299" },
    ]
  },
  {
    title: "Sales",
    link: "/sales",
    items: [
      { name: "Weekly Sales", image: "Image/Sales_1.jpg", price: "₨ 7,999" },
      { name: "Monthly Sales", image: "Image/Sales_2.jpg", price: "₨ 14,499" },
      { name: "Summer Sales", image: "Image/Sales_3.jpg", price: "₨ 9,999" },
      { name: "Coming Soon", image: "Image/Coming_Soon.png", price: "Coming Soon" }
    ]
  }
];

const FirstSection = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const navigate = useNavigate(); // ✅ FIXED — hook inside component

  const handleOrderClick = (item) => {
    navigate("/order", { state: { product: item } });
  };

  const handleClosePanel = () => {
    setSelectedProduct(null);
  };

  return (
    <section className="w-full py-12 bg-gray-900 text-gray-100 relative">
      <div className="max-w-7xl mx-auto px-6">
        {categories.map((category, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-6 text-white tracking-wide">
              {category.title}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6">

              {/* Product Cards */}
              {category.items.slice(0, 4).map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => handleOrderClick(item)}
                  className="bg-gray-800 rounded-lg shadow-lg p-4 hover:shadow-2xl transition-all border border-gray-700 cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-60 object-cover rounded-lg"
                  />
                  <h3 className="text-xl font-semibold text-white mt-4">
                    {item.name}
                  </h3>
                </div>
              ))}

              {/* See More Button */}
              <Link
                to={category.link}
                className="flex flex-col items-center justify-center bg-gray-800 rounded-lg shadow-lg p-4 hover:shadow-2xl transition-all cursor-pointer border border-gray-700"
              >
                <div className="w-full h-60 flex items-center justify-center bg-gray-700 rounded-lg">
                  <span className="text-xl font-bold text-blue-400">See More</span>
                </div>
                <h3 className="text-xl font-semibold text-white mt-4 text-center">
                  Explore Full Collection
                </h3>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* ORDER PANEL POPUP */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl w-96 text-black relative">
            <button
              onClick={handleClosePanel}
              className="absolute top-2 right-3 text-xl font-bold"
            >
              ×
            </button>

            <img
              src={selectedProduct.image}
              className="w-full h-60 object-cover rounded-lg"
              alt=""
            />

            <h2 className="text-2xl font-bold mt-4">{selectedProduct.name}</h2>
            <p className="text-lg text-gray-600 mt-2">{selectedProduct.price}</p>

            <button
              onClick={() =>
                navigate("/order", { state: { product: selectedProduct } })
              }
              className="mt-5 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold"
            >
              Order Now
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default FirstSection;
