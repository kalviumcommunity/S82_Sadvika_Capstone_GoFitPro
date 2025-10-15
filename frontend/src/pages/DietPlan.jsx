import React, { useState } from "react";
import { FaAppleAlt, FaCheckCircle, FaRedo, FaLeaf } from "react-icons/fa";
import { Link } from "react-router-dom";

const DietPlan = () => {
  const [completedMeals, setCompletedMeals] = useState([]);

  const meals = [
    {
      id: 1,
      name: "Breakfast",
      items: "Oatmeal with fruits, 2 boiled eggs, green tea",
      time: "8:00 AM",
    },
    {
      id: 2,
      name: "Mid-Morning Snack",
      items: "Handful of almonds and a banana",
      time: "10:30 AM",
    },
    {
      id: 3,
      name: "Lunch",
      items: "Grilled chicken, brown rice, and salad",
      time: "1:00 PM",
    },
    {
      id: 4,
      name: "Evening Snack",
      items: "Protein shake or fruit smoothie",
      time: "5:00 PM",
    },
    {
      id: 5,
      name: "Dinner",
      items: "Steamed vegetables and paneer/tofu",
      time: "8:00 PM",
    },
  ];

  const toggleMeal = (id) => {
    setCompletedMeals((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  const totalMeals = meals.length;
  const completed = completedMeals.length;
  const progress = (completed / totalMeals) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 text-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-6 shadow-lg">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-6">
          <h1 className="text-3xl font-bold tracking-wide flex items-center gap-2">
            <FaAppleAlt /> Diet Plan
          </h1>
          <p className="text-sm mt-2 sm:mt-0">
            Fuel your body right, <span className="font-semibold">User!</span> 🥗
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-10">
        {/* Progress Tracker */}
        <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-md mb-10 border border-white/30">
          <h2 className="text-lg font-semibold text-indigo-700 mb-4">
            Meal Progress
          </h2>
          <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
            <div
              className="bg-gradient-to-r from-indigo-600 to-blue-500 h-4 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-700">
            {completed}/{totalMeals} meals completed 🥳
          </p>
        </div>

        {/* Meal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {meals.map((meal) => (
            <div
              key={meal.id}
              className={`p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border border-white/30 bg-white/80 backdrop-blur-md ${
                completedMeals.includes(meal.id)
                  ? "border-green-400 bg-green-50/60"
                  : ""
              }`}
            >
              <h3 className="text-xl font-bold text-indigo-700 mb-2 flex items-center gap-2">
                <FaLeaf /> {meal.name}
              </h3>
              <p className="text-gray-700 text-sm mb-2 italic">{meal.time}</p>
              <p className="text-gray-600 mb-4">{meal.items}</p>

              <button
                onClick={() => toggleMeal(meal.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold transition-all ${
                  completedMeals.includes(meal.id)
                    ? "bg-green-500 hover:bg-green-600 text-white"
                    : "bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-blue-700 hover:to-indigo-700 text-white"
                }`}
              >
                {completedMeals.includes(meal.id) ? (
                  <>
                    <FaCheckCircle /> Completed
                  </>
                ) : (
                  <>
                    <FaLeaf /> Mark as Done
                  </>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
          <button
            onClick={() => setCompletedMeals([])}
            className="flex items-center gap-2 bg-white/80 border border-white/30 backdrop-blur-md hover:bg-blue-100 px-6 py-3 rounded-xl font-semibold text-blue-800 transition"
          >
            <FaRedo /> Reset Meals
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

export default DietPlan;
