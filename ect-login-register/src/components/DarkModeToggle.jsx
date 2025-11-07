import React from 'react';

export default function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      style={{
        position: 'fixed',
        bottom: '25px',
        right: '25px',
        border: 'none',
        borderRadius: '50%',
        width: '55px',
        height: '55px',
        fontSize: '1.5rem',
        cursor: 'pointer',
        fontWeight: '600',
        backgroundColor: darkMode ? '#4ADE80' : '#065F46',
        color: darkMode ? '#0F172A' : '#FFFFFF',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)',
        transition: 'all 0.3s ease',
        zIndex: 1000
      }}
      onClick={() => setDarkMode(!darkMode)}
      title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {darkMode ? '☀️' : '🌙'}
    </button>
  );
}
