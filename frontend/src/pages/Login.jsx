import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });

      if (response.data.success) {
        navigate("/dashboard"); // Redirect to Dashboard after successful login
      } else {
        setError("Invalid credentials.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-yellow-400 mb-6">Log In</h1>

      <form onSubmit={handleLogin} className="w-full max-w-sm space-y-6">
        <div>
          <label className="block text-gray-300" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="w-full p-3 rounded-lg bg-gray-800 text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-gray-300" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="w-full p-3 rounded-lg bg-gray-800 text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <div className="flex justify-between items-center">
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg">
            Log In
          </button>
        </div>
      </form>

      <p className="mt-4 text-gray-300">
        Don't have an account?{" "}
        <a href="/signup" className="text-yellow-400">Sign Up</a>
      </p>
    </div>
  );
};

export default Login;
