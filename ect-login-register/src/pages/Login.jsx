import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from "../assets/EcoTrack-logo.png"; 

function Login({ darkMode, setUserData }) {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    accountType: "Resident",
  });
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    const newErrors = {};
    
    if (!loginData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(loginData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!loginData.password) {
      newErrors.password = "Password is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
  const { name, value } = e.target;
  setLoginData({ ...loginData, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
    setErrorMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      if (
        loginData.accountType === "Admin" &&
        loginData.email === "admin@example.com" &&
        loginData.password === "admin123"
      ) {
        setUserData({ ...loginData });
        setSuccessMessage("Login successful! Welcome Admin.");
      } else if (
        loginData.accountType === "Resident/User" &&
        loginData.email === "user@example.com" &&
        loginData.password === "user123"
      ) {
        setUserData({ ...loginData });
        setSuccessMessage("Login successful! Welcome User.");
      } else {
        setErrorMessage("Invalid email, password, or account type. Please try again.");
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className={`login-container ${darkMode ? "dark" : "light"}`}>
      <div className="login-card">
       <div
          className="profile-image"
          style={{ backgroundImage: `url(${logo})` }}
        ></div>
        <h2>Welcome Back</h2>
        <p>Login to your EcoTrackr account</p>

        {errorMessage && (
          <div className="error-message">{errorMessage}</div>
        )}
        {successMessage && (
          <div className="success-message">{successMessage}</div>
        )}

        <div className="form-container">
          <h3>Email Address</h3>
          <input
            type="email"
            id="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className={errors.email ? 'input-error' : ''}
          />
          {errors.email && <div className="field-error">{errors.email}</div>}

          <h3>Password</h3>
          <input
            type="password"
            id="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className={errors.password ? 'input-error' : ''}
          />
          {errors.password && <div className="field-error">{errors.password}</div>}

          <h3>Account Type</h3>
          <select
            id="accountType"
            name="accountType"
            value={loginData.accountType}
            onChange={handleChange}
          >
            <option value="Resident">Resident</option>
            <option value="Admin">Administrator</option>
          </select>

          <button onClick={handleSubmit} disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </div>

        <p className="register-link">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
}
export default Login;