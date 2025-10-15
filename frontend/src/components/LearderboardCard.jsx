// src/components/LeaderboardCard.jsx
import React from "react";

const LeaderboardCard = ({ rank, name, stars }) => {
  return (
    <div className="p-4 rounded-2xl shadow-md hover:shadow-xl transition-all border border-white/30 bg-white/80 backdrop-blur-md flex justify-between items-center">
      <div className="flex items-center gap-4">
        <span className="text-xl font-bold">{rank}.</span>
        <span className="font-semibold text-gray-800">{name}</span>
      </div>
      <span className="font-bold text-yellow-500">⭐ {stars}</span>
    </div>
  );
};

export default LeaderboardCard;
