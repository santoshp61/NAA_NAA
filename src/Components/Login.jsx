import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    setError("");

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        setEmail("");
        setPassword("");
        navigate("/owner");
      } else {
        setError(data.message);
      }
    } catch {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 px-4">
      <div className="w-full max-w-md bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl p-8 text-gray-100 backdrop-blur-md transition-transform hover:scale-[1.01] duration-200
                      hover:shadow-[0_0_40px_#4f46e5]">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-6 text-white tracking-wide text-purple-400 drop-shadow-lg">
          Welcome Back 👋
        </h2>
        <p className="text-center text-gray-400 mb-8 drop-shadow-sm">
          Sign in to access your owner dashboard
        </p>

        {/* Error message */}
        {error && (
          <div className="mb-4 text-red-400 bg-red-900/20 border border-red-600 text-center py-2 rounded-md drop-shadow-md">
            {error}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 shadow-[0_0_10px_#7c3aed] transition"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 shadow-[0_0_10px_#7c3aed] transition"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="mt-4 w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-2.5 rounded-md shadow-lg shadow-purple-500/50 hover:shadow-[0_0_25px_#7c3aed] transition-all duration-300"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 border-t border-gray-700"></div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-400">
          Don’t have an account?{" "}
          <span
            className="text-purple-400 hover:underline cursor-pointer drop-shadow-sm"
            onClick={() => navigate("/SignUp")} // ✅ Navigate to Sign-Up page
          >
            Sign Up
          </span>
        </p>
      </div>
    </main>
  );
}

export default Login;
