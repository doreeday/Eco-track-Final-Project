import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DarkModeToggle from "./components/DarkModeToggle";
import AdminDashboard from "./admin/AdminDashboard";
import UserDashboard from "./user/UserDashboard";
import "./index.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <h2 className="logo">EcoTrack</h2>
          <div className="nav-links">
            <Link to="/" className="nav-link">Login</Link>
            <Link to="/register" className="nav-link">Register</Link>
            <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
        </nav>

        <div className="page-content">
          <Routes>
            <Route path="/" element={<Login darkMode={darkMode} setUserData={setUserData} />} />
            <Route path="/register" element={<Register darkMode={darkMode} setUserData={setUserData} />} />
            <Route path="/admin" element={<AdminDashboard userData={userData} />} />
            <Route path="/user" element={<UserDashboard userData={userData} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
