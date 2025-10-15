import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const navItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Workout", path: "/workout" },
    { name: "Diet Plan", path: "/diet" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <footer className="bg-gradient-to-r from-blue-900 via-purple-800 to-indigo-700 text-gray-300 py-10 mt-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="mb-6 md:mb-0">
          <Link className="text-2xl font-bold text-white hover:scale-105 transition-transform" to="/dashboard">
            GoFitPro
          </Link>
          <p className="text-gray-300 mt-1 text-sm">
            Your personal fitness companion
          </p>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 mb-6 md:mb-0">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="hover:text-white transition-colors text-sm font-medium"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white transition-colors">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 text-sm mt-6">
        &copy; {new Date().getFullYear()} GoFitPro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
