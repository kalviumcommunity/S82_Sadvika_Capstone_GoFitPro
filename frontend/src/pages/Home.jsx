import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl font-bold text-blue-800 mb-6">
        Welcome to <span className="text-indigo-600">GoFitPro</span> 🏋️‍♀️
      </h1>
      <p className="text-lg text-gray-700 max-w-xl mb-8">
        Your personalized fitness companion. Get expert guidance, real-time coaching, and workouts that fit your style and comfort.
      </p>

      <div className="space-x-4">
        <Link
          to="/login"
          className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="bg-white border border-indigo-600 text-indigo-600 px-6 py-2 rounded-full hover:bg-indigo-100 transition"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Home;
