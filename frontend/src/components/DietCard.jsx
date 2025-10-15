// src/components/DietCard.jsx
import React from "react";
import { FaAppleAlt, FaClock } from "react-icons/fa";

const DietCard = ({ diet }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-5 flex flex-col hover:shadow-2xl transition-shadow cursor-pointer max-w-sm">
      <div className="flex items-center mb-3">
        <FaAppleAlt className="text-green-500 text-2xl mr-2" />
        <h3 className="text-xl font-semibold">{diet.meal}</h3>
      </div>
      <p className="text-gray-600 text-sm mb-2">{diet.description}</p>
      <div className="flex justify-between items-center text-gray-500 text-sm mt-auto">
        <span>{diet.calories} kcal</span>
        <span className="flex items-center gap-1">
          <FaClock /> {diet.time}
        </span>
      </div>
    </div>
  );
};

export default DietCard;
