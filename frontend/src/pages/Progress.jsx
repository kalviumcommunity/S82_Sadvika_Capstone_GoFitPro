// src/pages/Progress.jsx
import React from "react";
import ProgressTracker from "../components/ProgressTracker.jsx";

const Progress = () => {
  const weeklyProgress = [
    { type: "Workouts", completed: 5, total: 7 },
    { type: "Diet Plan", completed: 6, total: 7 },
    { type: "Stars Earned", completed: 42, total: 50 },
  ];

  const monthlyProgress = [
    { type: "Workouts", completed: 20, total: 28 },
    { type: "Diet Plan", completed: 24, total: 28 },
    { type: "Stars Earned", completed: 160, total: 200 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 text-gray-900 px-6 py-10">
      {/* Header */}
      <header className="mb-10 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-indigo-600 mb-2">
          Your Progress 📊
        </h1>
        <p className="text-gray-700 text-lg">
          Track your weekly and monthly achievements
        </p>
      </header>

      {/* Weekly Progress */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-6 text-center">
          Weekly Progress
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {weeklyProgress.map((item, index) => (
            <ProgressTracker
              key={index}
              type={item.type}
              completed={item.completed}
              total={item.total}
            />
          ))}
        </div>
      </section>

      {/* Monthly Progress */}
      <section>
        <h2 className="text-2xl font-semibold text-indigo-700 mb-6 text-center">
          Monthly Progress
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {monthlyProgress.map((item, index) => (
            <ProgressTracker
              key={index}
              type={item.type}
              completed={item.completed}
              total={item.total}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Progress;
