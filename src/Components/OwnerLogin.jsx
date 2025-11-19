import React, { useState } from "react";
import { loginOwner } from "../API/OwnerApi.js";

export default function OwnerLogic() {
    const [Email, setUsername] = useState("santoshpakhrin61@gmail.com");
    const [password, setPassword] = useState("123456");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const response = await loginOwner(Email, password);

            if (response.success) {
                localStorage.setItem("owner_token", response.token);
                window.location.href = "/owner/dashboard";
            } else {
                setError(response.message || "Invalid credentials");
            }
        } catch (err) {
            setError("Something went wrong!");
        }

        setLoading(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-4">
            <form
                onSubmit={handleLogin}
                className="bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-md"
            >
                <h2 className="text-2xl font-semibold mb-6 text-center">Owner Login</h2>

                {error && (
                    <p className="bg-red-600 p-2 rounded-md text-center mb-4 text-sm">{error}</p>
                )}

                <label className="text-sm">Username</label>
                <input
                    type="text"
                    className="w-full p-2 rounded-md mb-4 bg-gray-700 focus:outline-none"
                    value={Email}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />

                <label className="text-sm">Password</label>
                <input
                    type="password"
                    className="w-full p-2 rounded-md mb-6 bg-gray-700 focus:outline-none"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded-md text-lg transition"
                >
                    {loading ? "Logging in..." : "Login"}
                </button>
            </form>
        </div>
    );
}
