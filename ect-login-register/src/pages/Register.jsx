import React, { useState } from "react";
import InputField from "../components/InputField";
import "./Register.css";
import { useNavigate } from "react-router-dom";

export default function Register({ darkMode, setUserData }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const role = email.includes("admin") ? "admin" : "user";

    const userInfo = { firstName, lastName, role };
    setUserData(userInfo);
    navigate(`/${role}`);
  };

  return (
    <div className={`register-card ${darkMode ? "dark" : "light"}`}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        alt="avatar"
        className="avatar"
      />
      <h2 className="register-title">Join EcoTrack</h2>
      <p>Create your account and start making a difference!</p>

      <form onSubmit={handleRegister}>
        <InputField label="First Name" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <InputField label="Last Name" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <InputField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <InputField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="register-btn">Create Account</button>
      </form>

      <p className="switch-text">
        Already have an account? <a href="/">Login here</a>
      </p>
    </div>
  );
}
