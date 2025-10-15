// src/pages/Landing.jsx
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/images/hero-bg.jpg"; // Make sure this path is correct

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 text-gray-900 px-6 lg:px-20">
      
      {/* Text Section */}
      <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-indigo-600">
          Welcome to GoFitPro! 🏋️‍♂️
        </h1>
        <p className="text-lg sm:text-xl text-gray-700">
          Achieve your fitness goals with expert coaches.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => navigate("/login")}
            className="bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold px-8 py-3 rounded-xl shadow-md transition transform hover:scale-105"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/register")}
            className="bg-white/80 backdrop-blur-md hover:bg-white/90 text-indigo-700 font-semibold px-8 py-3 rounded-xl shadow-md transition transform hover:scale-105 border border-indigo-300"
          >
            Register
          </button>
        </div>

        <p className="text-gray-700 italic text-sm sm:text-base mt-2">
          💪 "Every day is a chance to get stronger!" 💪
        </p>
      </div>

      {/* Hero Image */}
      <div className="lg:w-1/2 mb-10 lg:mb-0 flex justify-center">
        <img
          src={heroImage}
          alt="Fitness Hero"
          className="w-full max-w-md rounded-3xl shadow-lg object-cover"
        />
      </div>
    </div>
  );
}
