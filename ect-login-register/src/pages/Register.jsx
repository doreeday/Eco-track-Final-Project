import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../pages/Register.css"; // adjust path if needed
import logo from "../assets/EcoTrack-logo.png"; 

function Register({ setUserData }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "Resident",
  });

  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // --- Form Validation ---
  const validateForm = () => {
    const newErrors = {};

    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    else if (form.firstName.trim().length < 2)
      newErrors.firstName = "First name must be at least 2 characters";

    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";
    else if (form.lastName.trim().length < 2)
      newErrors.lastName = "Last name must be at least 2 characters";

    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Email is invalid";

    if (!form.password) newErrors.password = "Password is required";
    else if (form.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    else if (!/(?=.*[0-9])/.test(form.password))
      newErrors.password = "Password must contain at least one number";
    else if (!/(?=.*[!@#$%^&*])/.test(form.password))
      newErrors.password =
        "Password must contain at least one special character (!@#$%^&*)";

    if (!form.confirmPassword)
      newErrors.confirmPassword = "Please confirm your password";
    else if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // --- Handle Input Change ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    setErrorMessage("");
  };

  // --- Handle Form Submit ---
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!validateForm()) return;

    setIsLoading(true);

    if (typeof setUserData === "function") setUserData(form);

    setTimeout(() => {
      setSuccessMessage(`Account created successfully! Welcome, ${form.firstName}!`);
      setIsLoading(false);
    }, 700);
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <div
          className="profile-image"
          style={{ backgroundImage: `url(${logo})` }}
        ></div>

        <h2>Create Your Account</h2>
        <p>Join EcoTrackr and start making a difference!</p>

        {errorMessage && <div className="error-message">{errorMessage}</div>}
        {successMessage && <div className="success-message">{successMessage}</div>}

        <form className="form-container" onSubmit={handleSubmit}>
          <h3>First Name</h3>
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            placeholder="Enter your first name"
            className={errors.firstName ? "input-error" : ""}
          />
          {errors.firstName && <div className="field-error">{errors.firstName}</div>}

          <h3>Last Name</h3>
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Enter your last name"
            className={errors.lastName ? "input-error" : ""}
          />
          {errors.lastName && <div className="field-error">{errors.lastName}</div>}

          <h3>Email Address</h3>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className={errors.email ? "input-error" : ""}
          />
          {errors.email && <div className="field-error">{errors.email}</div>}

          <h3>Password</h3>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Create a password"
            className={errors.password ? "input-error" : ""}
          />
          {errors.password && <div className="field-error">{errors.password}</div>}

          <h3>Confirm Password</h3>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Re-enter your password"
            className={errors.confirmPassword ? "input-error" : ""}
          />
          {errors.confirmPassword && (
            <div className="field-error">{errors.confirmPassword}</div>
          )}

          <h3>Account Type</h3>
          <select
            name="accountType"
            value={form.accountType}
            onChange={handleChange}
          >
            <option value="Resident">Resident</option>
            <option value="Admin">Administrator</option>
          </select>

          <button type="submit" disabled={isLoading}>
            {isLoading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <p className="login-link">
          Already have an account? <Link to="/">Login here</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
