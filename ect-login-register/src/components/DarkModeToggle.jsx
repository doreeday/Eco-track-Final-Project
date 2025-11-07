import React from 'react';

export default function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      style={{
        border: 'none',
        borderRadius: '6px',
        padding: '0.5rem 1rem',
        cursor: 'pointer',
        fontWeight: '600',
        backgroundColor: darkMode ? '#4ADE80' : '#065F46',
        color: darkMode ? '#0F172A' : '#FFFFFF',
        transition: 'all 0.3s ease'
      }}
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
}
