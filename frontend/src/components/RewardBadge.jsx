// src/components/RewardBadge.jsx
import React from "react";
import { FaStar, FaMedal } from "react-icons/fa";

const RewardBadge = ({ type = "star", count = 1, label }) => {
  const renderIcon = () => {
    if (type === "star") return <FaStar className="text-yellow-400" />;
    if (type === "medal") return <FaMedal className="text-red-500" />;
    return null;
  };

  return (
    <div className="flex flex-col items-center bg-white shadow-md rounded-2xl p-4 w-24 hover:shadow-xl transition-shadow">
      <div className="flex space-x-1 mb-2">
        {Array.from({ length: count }, (_, i) => (
          <span key={i}>{renderIcon()}</span>
        ))}
      </div>
      {label && <p className="text-sm text-gray-700 text-center">{label}</p>}
    </div>
  );
};

export default RewardBadge;
