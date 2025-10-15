import React, { useState } from "react";
import { FaPlay, FaCheckCircle, FaRedo, FaDumbbell } from "react-icons/fa";
import { Link } from "react-router-dom";

const Workout = () => {
  const [completed, setCompleted] = useState([]);

  const workouts = [
    { id: 1, name: "Warm-up & Stretch", duration: "10 min" },
    { id: 2, name: "Push-ups", duration: "3 sets" },
    { id: 3, name: "Squats", duration: "3 sets" },
    { id: 4, name: "Jogging", duration: "15 min" },
    { id: 5, name: "Plank", duration: "2 min" },
  ];

  const toggleComplete = (id) => {
    setCompleted((prev) =>
      prev.includes(id) ? prev.filter((w) => w !== id) : [...prev, id]
    );
  };

  const completedCount = completed.length;
  const total = workouts.length;
  const progress = (completedCount / total) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 text-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-6 shadow-lg">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-6">
          <h1 className="text-3xl font-bold tracking-wide flex items-center gap-2">
            <FaDumbbell /> Workout Session
          </h1>
          <p className="text-sm mt-2 sm:mt-0">
            Keep going strong, <span className="font-semibold">User!</span> 💪
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-10">
        {/* Progress Bar */}
        <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-md mb-10 border border-white/30">
          <h2 className="text-lg font-semibold text-indigo-700 mb-4">
            Today's Progress
          </h2>
          <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
            <div
              className="bg-gradient-to-r from-indigo-600 to-blue-500 h-4 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-700">
            {completedCount}/{total} exercises completed 🎯
          </p>
        </div>

        {/* Workout List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workouts.map((workout) => (
            <div
              key={workout.id}
              className={`p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border border-white/30 bg-white/80 backdrop-blur-md ${
                completed.includes(workout.id)
                  ? "border-green-400 bg-green-50/60"
                  : ""
              }`}
            >
              <h3 className="text-xl font-bold text-indigo-700 mb-2">
                {workout.name}
              </h3>
              <p className="text-gray-600 mb-4">{workout.duration}</p>
              <button
                onClick={() => toggleComplete(workout.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold transition-all ${
                  completed.includes(workout.id)
                    ? "bg-green-500 hover:bg-green-600 text-white"
                    : "bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-blue-700 hover:to-indigo-700 text-white"
                }`}
              >
                {completed.includes(workout.id) ? (
                  <>
                    <FaCheckCircle /> Completed
                  </>
                ) : (
                  <>
                    <FaPlay /> Start
                  </>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
          <button
            onClick={() => setCompleted([])}
            className="flex items-center gap-2 bg-white/80 border border-white/30 backdrop-blur-md hover:bg-blue-100 px-6 py-3 rounded-xl font-semibold text-blue-800 transition"
          >
            <FaRedo /> Reset Workout
          </button>

          <Link
            to="/dashboard"
            className="bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-3 rounded-xl shadow-md transition"
          >
            Back to Dashboard
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Workout;
