import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Workout from './pages/Workout';
import DietPlan from './pages/DietPlan';
import Chat  from './pages/Chat';
import Coaches from './pages/Coaches';
import Leaderboard  from './pages/Leaderboard';
import Progress from './pages/Progress';
import VideoSessions from './pages/VideoSessions';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/diet" element={<DietPlan />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/coaches" element={<Coaches />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/videosessions" element={<VideoSessions />} />
      </Routes>
    </Router>
  );
}

export default App;
