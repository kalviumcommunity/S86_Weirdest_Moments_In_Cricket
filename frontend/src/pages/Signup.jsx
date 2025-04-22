import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/signup", {
        email,
        password,
      });

      if (response.data.success) {
        navigate("/login"); // Redirect to Dashboard after successful signup
      } else {
        setError(response.data.message || "Something went wrong.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-yellow-400 mb-6">Sign Up</h1>

      <form onSubmit={handleSignup} className="w-full max-w-sm space-y-6">
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
            Sign Up
          </button>
        </div>
      </form>

      <p className="mt-4 text-gray-300">
        Already have an account?{" "}
        <a href="/login" className="text-yellow-400">Log In</a>
      </p>
    </div>
  );
};

export default Signup;
