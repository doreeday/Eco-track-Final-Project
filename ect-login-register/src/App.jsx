import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import DarkModeToggle from './components/DarkModeToggle';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? '#0F172A' : '#F1FDFB';
    document.body.style.color = darkMode ? '#BBF7D0' : '#065F46';
    document.body.style.fontFamily = 'Roboto, sans-serif';
    document.body.style.transition = 'all 0.3s ease';
  }, [darkMode]);

  const linkStyle = {
    margin: '0 1rem',
    textDecoration: 'none',
    color: darkMode ? '#BBF7D0' : '#065F46',
    fontWeight: 600
  };

  return (
    <Router>
      <div style={{ textAlign: 'center' }}>
        <nav
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem 2rem'
          }}
        >
          <h2>EcoTrack</h2>
          <div>
            <Link to="/" style={linkStyle}>Login</Link>
            <Link to="/register" style={linkStyle}>Register</Link>
            <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
        </nav>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '3rem',
            flexWrap: 'wrap',
            height: '85vh'
          }}
        >
          <Routes>
            <Route path="/" element={<Login darkMode={darkMode} />} />
            <Route path="/register" element={<Register darkMode={darkMode} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
