// src/pages/VideoSessions.jsx
import React from "react";
import VideoSessionCard from "../components/VideoSessionCard.jsx";

const VideoSessions = () => {
  const sessions = [
    {
      id: 1,
      title: "Full Body HIIT",
      coach: "John Doe",
      type: "Live",
      duration: "45 min",
      videoUrl: "/src/assets/videos/sample-workout.mp4",
    },
    {
      id: 2,
      title: "Morning Yoga Flow",
      coach: "Jane Smith",
      type: "Recorded",
      duration: "30 min",
      videoUrl: "/src/assets/videos/sample-workout.mp4",
    },
    {
      id: 3,
      title: "Strength Training Basics",
      coach: "Mike Lee",
      type: "Recorded",
      duration: "50 min",
      videoUrl: "/src/assets/videos/sample-workout.mp4",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 text-gray-900 px-6 py-10">
      {/* Header */}
      <header className="mb-10 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-indigo-600 mb-2">
          Video Sessions 🎥
        </h1>
        <p className="text-gray-700 text-lg">
          Join live or watch recorded sessions with your favorite coaches
        </p>
      </header>

      {/* Sessions Grid */}
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sessions.map((session) => (
          <VideoSessionCard key={session.id} session={session} />
        ))}
      </main>
    </div>
  );
};

export default VideoSessions;
