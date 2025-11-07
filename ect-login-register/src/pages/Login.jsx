import React, { useState } from "react";
import InputField from "../components/InputField";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export default function Login({ darkMode, setUserData }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Sample condition: if email includes "admin" → admin dashboard
    const role = email.includes("admin") ? "admin" : "user";

    const userInfo = {
      firstName: "John",
      lastName: role === "admin" ? "Admin" : "User",
      role,
    };

    setUserData(userInfo);
    navigate(`/${role}`);
  };

  return (
    <div className={`login-card ${darkMode ? "dark" : "light"}`}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        alt="avatar"
        className="avatar"
      />
      <h2 className="login-title">Welcome to EcoTrack</h2>
      <p>Sign in to manage your waste record</p>

      <form onSubmit={handleLogin}>
        <InputField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <InputField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="login-btn">Log in</button>
      </form>

      <p className="switch-text">
        Don’t have an account? <a href="/register">Register here</a>
      </p>
    </div>
  );
}
