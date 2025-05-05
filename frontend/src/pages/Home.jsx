import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl font-extrabold text-blue-900 mb-4">
        Welcome to <span className="text-indigo-700">GoFitPro</span> 💥🏋️‍♂️🚀
      </h1>
      
      <p className="text-lg text-gray-800 max-w-2xl mb-6">
        Your all-in-one fitness companion! Get 💬 real-time coaching, 💪 personalized workouts,  
        and 🥗 diet plans — all designed to fit <span className="font-semibold">your style & comfort</span>.
      </p>

      <div className="mb-8">
        <p className="text-md text-gray-700">
          ⭐ Join thousands transforming their fitness journey! <br />
          🔥 Track your progress, earn rewards, and smash your goals! <br />
          💬 Chat with expert coaches anytime!
        </p>
      </div>

      <div className="space-x-4">
        <Link
          to="/login"
          className="bg-indigo-600 text-white px-6 py-3 rounded-full text-lg hover:bg-indigo-700 transition shadow-lg"
        >
          👉 Login
        </Link>
        <Link
          to="/register"
          className="bg-white border-2 border-indigo-600 text-indigo-700 px-6 py-3 rounded-full text-lg hover:bg-indigo-100 transition shadow-lg"
        >
          🚀 Register
        </Link>
      </div>

      <footer className="mt-12 text-sm text-gray-600">
        💡 Fitness made fun and personalized — just for you!
      </footer>
    </div>
  );
};

export default Home;
