// src/pages/Coaches.jsx
import React from "react";
import CoachCard from "../components/CoachCard.jsx";
import coach1 from '../assets/coach1.png';
import coach2 from '../assets/coach2.png';
import coach3 from '../assets/coach3.png';

const Coaches = () => {
  const coaches = [
    { 
      name: "John Doe", 
      photo:  `url(${coach1})`, 
      expertise: "Strength Training", 
      rating: 5, 
      bio: "Certified trainer with 10 years of experience" 
    },
    { 
      name: "Jane Smith", 
      photo:  `url(${coach2})`, 
      expertise: "Yoga & Flexibility", 
      rating: 4, 
      bio: "Specialist in Yoga and mobility exercises" 
    },
    { 
      name: "Mike Lee", 
      photo:  `url(${coach3})`, 
      expertise: "Cardio & Endurance", 
      rating: 4, 
      bio: "Expert in high-intensity cardio training" 
    },
    // Add more coaches here
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 text-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-6 shadow-lg">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold tracking-wide">Our Coaches 🧑‍🏫</h1>
          <p className="text-sm mt-2">
            Choose your fitness guide and start your journey!
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coaches.map((coach, index) => (
            <CoachCard key={index} coach={coach} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Coaches;
