import React from "react";
import { useNavigate } from "react-router-dom";

export default function OwnerPanel() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-black text-white">

      {/* Sidebar */}
      <div className="w-64 bg-[#111] shadow-xl p-6 flex flex-col gap-6 border-r border-yellow-600">
        <h2 className="text-2xl font-bold text-yellow-500 tracking-wide">
          Owner Panel
        </h2>

        <nav className="flex flex-col gap-4 text-gray-300">

          <button
            onClick={() => navigate("/owner/users")}
            className="hover:text-yellow-400 hover:font-semibold text-left transition-all"
          >
            User Details
          </button>

          <button
            onClick={() => navigate("/owner/orders")}
            className="hover:text-yellow-400 hover:font-semibold text-left transition-all"
          >
            Order Management
          </button>

          <button
            onClick={() => navigate("/owner/products")}
            className="hover:text-yellow-400 hover:font-semibold text-left transition-all"
          >
            Product Management
          </button>

          <button
            onClick={() => navigate("/owner/revenue")}
            className="hover:text-yellow-400 hover:font-semibold text-left transition-all"
          >
            Total Revenue
          </button>

        </nav>
      </div>

      {/* Right Content Area */}
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold text-yellow-400">
          Welcome to Owner Dashboard
        </h1>
        <p className="text-gray-400 mt-2">
          Select any section from the left menu to manage your store.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Cards */}
          <div
            onClick={() => navigate("/owner/users")}
            className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg border border-yellow-700 hover:scale-105 transition cursor-pointer"
          >
            <h3 className="text-lg font-semibold text-yellow-400 mb-2">User Details</h3>
            <p className="text-gray-400">View & manage all users.</p>
          </div>

          <div
            onClick={() => navigate("/owner/orders")}
            className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg border border-yellow-700 hover:scale-105 transition cursor-pointer"
          >
            <h3 className="text-lg font-semibold text-yellow-400 mb-2">Order Management</h3>
            <p className="text-gray-400">Track and process customer orders.</p>
          </div>

          <div
            onClick={() => navigate("/owner/products")}
            className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg border border-yellow-700 hover:scale-105 transition cursor-pointer"
          >
            <h3 className="text-lg font-semibold text-yellow-400 mb-2">Product Management</h3>
            <p className="text-gray-400">Add, edit, or remove products.</p>
          </div>

          <div
            onClick={() => navigate("/owner/revenue")}
            className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg border border-yellow-700 hover:scale-105 transition cursor-pointer"
          >
            <h3 className="text-lg font-semibold text-yellow-400 mb-2">Total Revenue</h3>
            <p className="text-gray-400">View sales statistics & revenue.</p>
          </div>

        </div>
      </div>
    </div>
  );
}
