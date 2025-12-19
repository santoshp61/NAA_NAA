import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    badge: "✨ Trending",
    title: "Elevate Your Everyday Style",
    description:
      "Fresh looks, modern vibes, and outfits that make you feel confident every day. Style made simple.",
    image: "/Image/woman-model-next.png",
    link: "/womens",
    cta: "Shop Women",
    accent: "from-pink-400 to-purple-500",
  },
  {
    id: 2,
    badge: "🔥 New Arrival",
    title: "Style That Speaks for You",
    description:
      "Premium menswear designed for comfort, confidence, and class. Dress sharp without trying hard.",
    image: "/Image/man-Photoroom.png",
    link: "/mens",
    cta: "Explore Men",
    accent: "from-blue-400 to-cyan-500",
  },
  {
    id: 3,
    badge: "💥 Big Sale",
    title: "Bold Looks. Better Prices.",
    description:
      "Turn heads without breaking the bank. Grab exclusive deals before they’re gone!",
    image: "/Image/woman-mode-red-png.png",
    link: "/sale",
    cta: "Grab Deals",
    accent: "from-red-400 to-orange-500",
  },
];

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full h-[70vh] relative overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white px-6 sm:px-10 md:px-16 py-10 md:py-16 transition-all duration-700">

      {/* Slider */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full h-full flex flex-col md:flex-row items-center justify-between flex-shrink-0"
          >
            {/* Left Content */}
            <div className="w-full md:w-1/2 text-left p-4 sm:p-8 space-y-5">

              {/* Badge */}
              <span className="inline-block px-4 py-1 text-xs font-semibold rounded-full bg-white/10 backdrop-blur-md">
                {slide.badge}
              </span>

              {/* Title */}
              <h1
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${slide.accent}`}
              >
                {slide.title}
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-md leading-relaxed">
                {slide.description}
              </p>

              {/* CTA */}
              <Link to={slide.link}>
                <button className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-blue-500/40 transition-all duration-300">
                  {slide.cta}
                </button>
              </Link>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-auto max-h-[220px] sm:max-h-[320px] md:max-h-[380px] lg:max-h-[450px] xl:max-h-[500px] drop-shadow-[0_0_25px_rgba(255,255,255,0.3)] transition-all duration-700"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index
              ? "bg-blue-500 scale-110"
              : "bg-gray-500 hover:bg-gray-400"
              }`}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
