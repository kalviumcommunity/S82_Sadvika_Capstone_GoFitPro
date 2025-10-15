// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 text-gray-900 px-6">
      <h1 className="text-9xl font-extrabold text-indigo-600 mb-6">404</h1>
      <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
      <p className="text-gray-700 mb-8 text-center">
        Oops! The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/dashboard"
        className="bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-3 rounded-xl shadow-md transition"
      >
        Back to Dashboard
      </Link>
    </div>
  );
};

export default NotFound;

