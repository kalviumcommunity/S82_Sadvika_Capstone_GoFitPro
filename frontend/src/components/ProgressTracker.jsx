import React from "react";
import { FaChartLine } from "react-icons/fa";

const ProgressTracker = ({ title, progress }) => {
  return (
    <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-md border border-white/30">
      <div className="flex items-center gap-2 mb-4">
        <FaChartLine className="text-indigo-600 text-2xl" />
        <h2 className="text-xl font-bold text-indigo-700">{title}</h2>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-4 mb-3">
        <div
          className="bg-gradient-to-r from-indigo-600 to-blue-500 h-4 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p className="text-gray-700 font-medium">
        {progress}% Completed 🎯
      </p>
    </div>
  );
};

export default ProgressTracker;
