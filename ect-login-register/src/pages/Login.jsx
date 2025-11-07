import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login({ darkMode, setUserData }) {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
    // Clear error for this field when user types
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

    // Simulate login (replace with actual login logic later)
    setTimeout(() => {
      if (loginData.email === "admin@example.com" && loginData.password === "admin123") {
        setUserData({ ...loginData, accountType: "Admin" });
        navigate("/admin");
      } else if (loginData.email === "user@example.com" && loginData.password === "user123") {
        setUserData({ ...loginData, accountType: "Resident/User" });
        navigate("/user");
      } else {
        setErrorMessage("Invalid email or password. Please try again.");
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className={`login-container ${darkMode ? "dark" : "light"}`}>
      <div className="login-card">
        <div className="profile-image"></div>
        <h2>Welcome Back</h2>
        <p>Login to your EcoTrackr account</p>

        {errorMessage && (
          <div className="error-message">{errorMessage}</div>
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