import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login successful! (Demo)");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex justify-center items-center px-4">
      <div className="bg-white/10 backdrop-blur-md shadow-2xl rounded-3xl p-10 max-w-md w-full border border-white/20">
        <h1 className="text-4xl font-extrabold text-white text-center mb-4">
          Welcome Back 💪
        </h1>
        <p className="text-gray-200 text-center mb-8">
          Login to your <span className="font-semibold text-purple-400">GoFitPro</span> account
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-purple-400" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-purple-600/40 bg-white/20 text-white placeholder-gray-200 focus:ring-2 focus:ring-purple-400 focus:outline-none"
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-purple-400" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-purple-600/40 bg-white/20 text-white placeholder-gray-200 focus:ring-2 focus:ring-purple-400 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white py-3 rounded-xl font-semibold hover:scale-105 transition duration-300 shadow-lg"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-200 mt-6">
          Don’t have an account?{" "}
          <Link to="/register" className="text-indigo-400 font-semibold hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
