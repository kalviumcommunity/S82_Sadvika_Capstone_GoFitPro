// src/pages/Leaderboard.jsx
import React from "react";
import LeaderboardCard from "../components/LearderboardCard.jsx";

const Leaderboard = () => {
  const leaderboard = [
    { rank: 1, name: "Sarah", stars: 120 },
    { rank: 2, name: "David", stars: 100 },
    { rank: 3, name: "You", stars: 95 },
    { rank: 4, name: "Emma", stars: 90 },
    { rank: 5, name: "Michael", stars: 85 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 text-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-6 shadow-lg">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold tracking-wide">Leaderboard 🏆</h1>
          <p className="text-sm mt-2">
            Check out the top performers and track your progress!
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {leaderboard.map((user) => (
            <LeaderboardCard key={user.rank} user={user} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Leaderboard;
