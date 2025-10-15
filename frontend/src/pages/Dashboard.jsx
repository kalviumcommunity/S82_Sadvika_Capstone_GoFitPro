import React from "react";
import { Link } from "react-router-dom";
import {
  FaDumbbell,
  FaUtensils,
  FaChartBar,
  FaComments,
  FaTrophy,
  FaStar,
} from "react-icons/fa";

import ProgressTracker from "../components/ProgressTracker.jsx";
import CoachCard from "../components/CoachCard.jsx";
import VideoSessionCard from "../components/VideoSessionCard.jsx";

// ✅ Importing coach images properly
import coach1 from "../assets/coach1.png";
import coach2 from "../assets/coach2.png";
import coach3 from "../assets/coach3.png";

const Dashboard = () => {
  const coaches = [
    { name: "John Doe", photo: coach1, expertise: "Strength", rating: 5, bio: "Certified trainer" },
    { name: "Jane Smith", photo: coach2, expertise: "Yoga", rating: 4, bio: "Yoga specialist" },
    { name: "Mike Lee", photo: coach3, expertise: "Cardio", rating: 4, bio: "Cardio expert" },
  ];

  const sessions = [
    { title: "Morning HIIT", coach: "John Doe", thumbnail: "/src/assets/images/hero-bg.jpg", type: "live", description: "High-intensity 30-min session" },
    { title: "Yoga Stretch", coach: "Jane Smith", thumbnail: "/src/assets/images/hero-bg.jpg", type: "recorded", description: "Relaxing yoga session" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0518] to-[#1c1a5a] text-white">
      {/* Header */}
      <header className="bg-transparent py-6 shadow-lg border-b border-white/10">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-6">
          <h1 className="text-3xl font-extrabold tracking-wide text-white">
            GoFitPro <span className="text-indigo-400">Dashboard 💪</span>
          </h1>
          <p className="text-sm mt-2 sm:mt-0 text-gray-300">
            Welcome back, <span className="font-semibold text-pink-400">User!</span>
          </p>
        </div>
      </header>

      {/* Main */}
      <main className="container mx-auto px-6 py-10 space-y-14">
        {/* Stats Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Achievements Card */}
          <div className="bg-white/10 rounded-2xl shadow-lg p-6 border border-white/20 hover:scale-105 transition-all flex flex-col justify-between items-center text-center h-full">
            <FaTrophy className="text-4xl text-yellow-400 mb-3" />
            <h2 className="text-2xl font-semibold mb-4">Achievements</h2>
            <div className="flex justify-around w-full">
              <div className="flex flex-col items-center">
               
              </div>
            </div>
          </div>

          {/* Workouts Completed Card */}
          <Link to="/workout">
            <div className="bg-white/10 rounded-2xl shadow-lg p-6 hover:scale-105 transition-all border border-white/20 flex flex-col justify-between items-center text-center h-full">
              <FaDumbbell className="text-indigo-400 text-4xl mb-3" />
              <h2 className="text-2xl font-semibold mb-4">Workouts Completed</h2>
              <p className="text-3xl font-bold text-pink-400">45</p>
            </div>
          </Link>

          {/* Diet Progress Card */}
          <Link to="/diet">
            <div className="bg-white/10 rounded-2xl shadow-lg p-6 hover:scale-105 transition-all border border-white/20 flex flex-col justify-between items-center text-center h-full">
              <FaUtensils className="text-indigo-400 text-4xl mb-3" />
              <h2 className="text-2xl font-semibold mb-4">Diet Progress</h2>
              <p className="text-3xl font-bold text-pink-400">80%</p>
            </div>
          </Link>
        </div>

        {/* Workout & Diet Tracker */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ProgressTracker
            title="Today's Workout 💥"
            items={[
              { name: "Warm-up & Stretch", duration: "10 min" },
              { name: "Push-ups", duration: "3 sets" },
              { name: "Squats", duration: "3 sets" },
              { name: "Jogging", duration: "15 min" },
            ]}
            link={{ path: "/workout", label: "Start Workout" }}
          />

          <ProgressTracker
            title="Today's Diet Plan 🥗"
            items={[
              { name: "Breakfast", duration: "Oats + Milk" },
              { name: "Lunch", duration: "Brown Rice + Grilled Chicken" },
              { name: "Snacks", duration: "Protein Shake" },
              { name: "Dinner", duration: "Salad + Soup" },
            ]}
            link={{ path: "/diet", label: "View Diet Plan" }}
          />
        </div>

        {/* Coaches Section */}
        <section>
          <h2 className="text-xl font-bold mb-6 text-indigo-400">Top Coaches 🧑‍🏫</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coaches.map((coach, index) => (
              <CoachCard key={index} coach={coach} />
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              to="/coaches"
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-6 py-2 rounded-full text-white font-semibold hover:opacity-90 transition"
            >
              View All Coaches
            </Link>
          </div>
        </section>

        {/* Video Sessions Section */}
        <section>
          <h2 className="text-xl font-bold mb-6 text-indigo-400">Workout Sessions 🎥</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {sessions.map((session, index) => (
              <VideoSessionCard key={index} session={session} />
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              to="/videosessions"
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-6 py-2 rounded-full text-white font-semibold hover:opacity-90 transition"
            >
              View All Sessions
            </Link>
          </div>
        </section>

        {/* Leaderboard & Chat Links */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          <Link
            to="/leaderboard"
            className="bg-white/10 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-all border border-white/20"
          >
            <FaChartBar className="text-indigo-400 text-3xl mb-2" />
            <h2 className="text-lg font-semibold">Leaderboard 🏆</h2>
            <p className="text-gray-300">See your ranking</p>
          </Link>

          <Link
            to="/chat"
            className="bg-white/10 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-all border border-white/20"
          >
            <FaComments className="text-indigo-400 text-3xl mb-2" />
            <h2 className="text-lg font-semibold">Chat 💬</h2>
            <p className="text-gray-300">Message your coach</p>
          </Link>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
