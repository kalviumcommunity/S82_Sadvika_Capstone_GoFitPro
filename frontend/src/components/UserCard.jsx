import React from "react";
import { FaStar, FaFireAlt, FaMedal } from "react-icons/fa";

const UserCard = () => {
  return (
    <div className="bg-gradient-to-br from-blue-200 to-indigo-300 text-blue-900 rounded-2xl shadow-lg p-6 flex flex-col sm:flex-row items-center justify-between transition-transform hover:scale-[1.02]">
      {/* Profile Section */}
      <div className="flex items-center space-x-4">
        <img
          src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
          alt="User Avatar"
          className="w-20 h-20 rounded-full border-4 border-white shadow-md"
        />
        <div>
          <h2 className="text-2xl font-bold">John Doe</h2>
          <p className="text-sm text-blue-800">john.doe@example.com</p>
          <p className="text-sm mt-1 font-medium">
            Fitness Level:{" "}
            <span className="font-bold text-indigo-700">Intermediate</span>
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex mt-6 sm:mt-0 space-x-6">
        <div className="flex flex-col items-center">
          <FaStar className="text-yellow-500 text-2xl mb-1" />
          <p className="text-lg font-semibold text-blue-900">12</p>
          <p className="text-xs text-blue-800">Stars</p>
        </div>

        <div className="flex flex-col items-center">
          <FaFireAlt className="text-orange-500 text-2xl mb-1" />
          <p className="text-lg font-semibold text-blue-900">7</p>
          <p className="text-xs text-blue-800">Day Streak</p>
        </div>

        <div className="flex flex-col items-center">
          <FaMedal className="text-indigo-600 text-2xl mb-1" />
          <p className="text-lg font-semibold text-blue-900">3</p>
          <p className="text-xs text-blue-800">Badges</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
