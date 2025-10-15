import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/hero.png"; // 💡 Replace with your workout image path

const Home = () => {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-indigo-900/70 to-blue-900/70"></div>

      {/* Navbar */}
      <nav className="absolute top-0 w-full flex justify-between items-center px-8 py-6 z-20 bg-transparent">
        <h1 className="text-2xl font-extrabold text-white tracking-wider">
          Go<span className="text-indigo-500">Fit</span>Pro
        </h1>
        <div className="hidden md:flex items-center space-x-8 text-gray-200 font-medium">
          <Link to="/" className="hover:text-indigo-400 transition">Home</Link>
          <Link to="/about" className="hover:text-indigo-400 transition">About</Link>
          <Link to="/workout" className="hover:text-indigo-400 transition">Workouts</Link>
          <Link to="/plans" className="hover:text-indigo-400 transition">Plans</Link>
          <Link to="/contact" className="hover:text-indigo-400 transition">Contact</Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            to="/membership"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full font-semibold shadow-lg transition"
          >
            Membership
          </Link>
          <Link
            to="/login"
            className="border border-indigo-400 text-indigo-300 hover:bg-indigo-700/30 px-5 py-2 rounded-full font-semibold transition"
          >
            Log In
          </Link>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="z-10 px-6 md:px-0 max-w-3xl mt-24">
        <p className="text-lg font-medium mb-3 text-indigo-300">
          GoFitPro – Personalized Fitness Coaching
        </p>
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6">
          Where <span className="text-indigo-400">Fitness</span> Becomes<br />Your Lifestyle
        </h1>
        <p className="text-lg text-gray-200 mb-8">
          Join your favorite coaches, complete daily goals, and transform your fitness journey — your way.
        </p>
        <Link
          to="/register"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-full shadow-md transition-transform hover:scale-105"
        >
         <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-indigo-500/50 transition duration-300">
  Get Started
</button>

        </Link>
      </div>

      {/* Floating Side Button */}
      
    </div>
  );
};

export default Home;
