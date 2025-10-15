// src/components/ChatBox.jsx
import React from "react";
import { FaUserCircle, FaCheckCircle } from "react-icons/fa";

const ChatBox = ({ chat }) => {
  return (
    <div className="flex items-start bg-white shadow-md rounded-2xl p-4 hover:shadow-xl transition-shadow cursor-pointer w-full max-w-md">
      <div className="mr-3">
        <img
          src={chat.userPhoto}
          alt={chat.userName}
          className="w-12 h-12 rounded-full object-cover"
        />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center mb-1">
          <h4 className="font-semibold">{chat.userName}</h4>
          <span className="text-xs text-gray-400">{chat.time}</span>
        </div>
        <p className="text-gray-600 text-sm line-clamp-2">
          {chat.lastMessage}
        </p>
      </div>
      {chat.read && (
        <FaCheckCircle className="ml-2 text-blue-500 text-sm mt-1" />
      )}
    </div>
  );
};

export default ChatBox;
