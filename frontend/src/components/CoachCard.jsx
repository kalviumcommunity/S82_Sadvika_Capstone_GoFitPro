// src/components/CoachCard.jsx
import React from "react";

const CoachCard = ({ coach }) => {
  return (
    <div className="p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border border-white/30 bg-white/80 backdrop-blur-md flex flex-col items-center text-center">
      <img
        src={coach.photo}
        alt={coach.name}
        className="w-24 h-24 rounded-full mb-4 object-cover"
      />
      <h3 className="text-xl font-bold text-indigo-700">{coach.name}</h3>
      <p className="text-gray-600 mb-2">{coach.specialty}</p>
      <p className="text-gray-500 text-sm">{coach.experience} years experience</p>
    </div>
  );
};

export default CoachCard;
