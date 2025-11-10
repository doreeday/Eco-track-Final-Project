import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DarkModeToggle from "./components/DarkModeToggle";
import "./index.css";


export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
    
           
          <div className="nav-links">
            <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
        </nav>

        <div className="page-content">
         <Routes>
          <Route path="/" element={<Login darkMode={darkMode} />} />
          <Route path="/register" element={<Register darkMode={darkMode} />} />
        </Routes>

        </div>
      </div>
    </Router>
  );
}
