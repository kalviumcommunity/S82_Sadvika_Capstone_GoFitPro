// src/components/VideoSessionCard.jsx
import React from "react";
import { FaPlay, FaVideo } from "react-icons/fa";

const VideoSessionCard = ({ session }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer max-w-sm">
      <div className="relative">
        <img
          src={session.thumbnail}
          alt={session.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
          {session.type === "live" ? "LIVE" : "RECORDED"}
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <FaPlay className="text-white text-4xl opacity-80" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{session.title}</h3>
        <p className="text-gray-500 text-sm mb-2">{session.coach}</p>
        <p className="text-gray-600 text-sm">{session.description}</p>
      </div>
    </div>
  );
};

export default VideoSessionCard;
