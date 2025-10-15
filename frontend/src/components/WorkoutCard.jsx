import React from "react";
import { FaDumbbell, FaClock } from "react-icons/fa";

const WorkoutCard = ({ title, description, duration, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-5 hover:shadow-2xl transition transform hover:scale-105 border border-blue-100">
      {/* Workout Image */}
      <div className="w-full h-40 rounded-xl overflow-hidden mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Workout Info */}
      <h2 className="text-2xl font-bold text-indigo-700 mb-2 flex items-center gap-2">
        <FaDumbbell className="text-indigo-500" /> {title}
      </h2>

      <p className="text-gray-700 mb-3">{description}</p>

      {/* Duration */}
      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center gap-2 text-blue-700 font-semibold">
          <FaClock /> <span>{duration}</span>
        </div>

        <button className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition shadow-md">
          Start Workout 💪
        </button>
      </div>
    </div>
  );
};

export default WorkoutCard;
