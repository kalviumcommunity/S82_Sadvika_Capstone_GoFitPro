// src/pages/Chat.jsx
import React, { useState } from "react";
import ChatBox from "../components/ChatBox.jsx";

const Chat = () => {
  const [selectedCoach, setSelectedCoach] = useState(null);

  const coaches = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Mike Lee" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 text-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-6 shadow-lg">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between">
          <h1 className="text-3xl font-bold tracking-wide">Coach Chat 💬</h1>
          <p className="text-sm mt-2 sm:mt-0">
            Stay connected with your fitness coach
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-10">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Coach List */}
          <div className="lg:w-1/4 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-md border border-white/30">
            <h2 className="text-xl font-bold mb-4 text-indigo-700">Coaches</h2>
            <ul className="space-y-2">
              {coaches.map((coach) => (
                <li
                  key={coach.id}
                  className={`p-2 rounded-lg cursor-pointer transition-all ${
                    selectedCoach?.id === coach.id
                      ? "bg-indigo-600 text-white"
                      : "hover:bg-indigo-100"
                  }`}
                  onClick={() => setSelectedCoach(coach)}
                >
                  {coach.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Chat Box */}
          <div className="lg:w-3/4 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-md border border-white/30">
            {selectedCoach ? (
              <ChatBox coach={selectedCoach} />
            ) : (
              <p className="text-gray-600 text-center mt-10">
                Select a coach to start chatting
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Chat;
