import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaDumbbell, FaUserCircle, FaUtensils, FaHome } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/dashboard", icon: <FaHome /> },
    { name: "Workout", path: "/workout", icon: <FaDumbbell /> },
    { name: "Diet Plan", path: "/diet", icon: <FaUtensils /> },
    { name: "Profile", path: "/profile", icon: <FaUserCircle /> },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-900 via-purple-800 to-indigo-700 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-3 text-white">
        {/* Logo */}
        <Link
          to="/dashboard"
          className="text-2xl font-bold tracking-wide hover:scale-105 transition-transform"
        >
          GoFitPro
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`flex items-center gap-2 text-sm font-semibold transition duration-300 
                  ${
                    location.pathname === item.path
                      ? "border-b-2 border-white text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
              >
                {item.icon}
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Logout Button */}
        <button className="bg-white text-indigo-800 font-semibold px-4 py-1 rounded-xl hover:bg-gray-200 transition">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
