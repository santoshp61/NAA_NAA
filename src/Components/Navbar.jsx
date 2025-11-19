import React, { useState, useEffect } from "react";
import {
  ShoppingBagIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [cartCount, setCartCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // ✅ Load cart count from localStorage
  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(cart.length);
    };

    updateCartCount();
    window.addEventListener("storage", updateCartCount);
    return () => window.removeEventListener("storage", updateCartCount);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const goToCart = () => navigate("/cart");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-700 bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg backdrop-blur-md">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between text-gray-200">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-widest text-white">
            NA NA
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-sm font-medium hover:text-blue-400 transition"
          >
            Home
          </Link>
          <Link
            to="/womens"
            className="text-sm font-medium hover:text-blue-400 transition"
          >
            Women
          </Link>
          <Link
            to="/mens"
            className="text-sm font-medium hover:text-blue-400 transition"
          >
            Men
          </Link>
          <Link
            to="/accessories"
            className="text-sm font-medium hover:text-blue-400 transition"
          >
            Accessories
          </Link>
          <Link
            to="/sale"
            className="text-sm font-medium hover:text-blue-400 transition"
          >
            Sale
          </Link>
        </nav>

        {/* Cart, Login & Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* ✅ Cart Button */}
          <button
            onClick={goToCart}
            className="relative p-2 border border-gray-700 rounded-md hover:bg-blue-600 hover:text-white transition-all duration-200"
          >
            <ShoppingBagIcon className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center text-xs bg-blue-600 text-white rounded-full">
                {cartCount}
              </span>
            )}
          </button>

          {/* ✅ Login Button */}
          <Link
            to="/login"
            className="hidden md:inline-block px-4 py-2 border border-blue-600 rounded-md text-blue-400 hover:bg-blue-600 hover:text-white transition-all"
          >
            Login
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 border border-gray-700 rounded-md hover:bg-gray-700"
            onClick={toggleMenu}
          >
            <Bars3Icon className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-40"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-64 bg-gray-900 text-gray-200 z-50 transform transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"
          } shadow-lg`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <span className="text-lg font-semibold">Menu</span>
          <button onClick={toggleMenu}>
            <XMarkIcon className="h-6 w-6 text-gray-300 hover:text-white" />
          </button>
        </div>

        <div className="flex flex-col p-4 space-y-3 border-gray-700">
          <Link
            to="/"
            className="py-2 border-b border-gray-800 hover:text-blue-400"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/womens"
            className="py-2 border-b border-gray-800 hover:text-blue-400"
            onClick={toggleMenu}
          >
            Women
          </Link>
          <Link
            to="/mens"
            className="py-2 border-b border-gray-800 hover:text-blue-400"
            onClick={toggleMenu}
          >
            Men
          </Link>
          <Link
            to="/accessories"
            className="py-2 border-b border-gray-800 hover:text-blue-400"
            onClick={toggleMenu}
          >
            Accessories
          </Link>
          <Link
            to="/sale"
            className="py-2 border-b border-gray-800 hover:text-blue-400"
            onClick={toggleMenu}
          >
            Sale
          </Link>

          {/* ✅ Mobile Cart */}
          <Link
            to="/cart"
            className="mt-4 py-2 text-center border border-blue-600 rounded-md text-blue-400 hover:bg-blue-600 hover:text-white transition"
            onClick={toggleMenu}
          >
            Cart ({cartCount})
          </Link>

          {/* ✅ Mobile Login */}
          <Link
            to="/login"
            className="mt-3 py-2 text-center border border-blue-600 rounded-md text-blue-400 hover:bg-blue-600 hover:text-white transition"
            onClick={toggleMenu}
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
