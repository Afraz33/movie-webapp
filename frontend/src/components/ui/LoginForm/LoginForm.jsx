import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginForm.module.css";
import { Link } from "react-router-dom";

// LoginForm Component
function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [alert, setAlert] = useState("");

  // Function to handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to add focus styling to input field
  const handleFocus = (e) => {
    e.target.classList.add(styles.inputFocused);
  };

  // Function to remove focus styling from input field
  const handleBlur = (e) => {
    e.target.classList.remove(styles.inputFocused);
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8000/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        // Handle different error cases
        if (response.status === 404) {
          setAlert("No user found");
        } else if (response.status === 401) {
          setAlert("Incorrect password");
        } else {
          setAlert("Unknown alert occurred");
        }
        return;
      }

      const data = await response.json();
      setAlert("Login Successful!");

      // Store user data in local storage
      localStorage.setItem("user name", data.userName);
      localStorage.setItem("email", data.email);
      localStorage.setItem("token", data.token);

      // Navigate to home page after successful login
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      console.error("Login failed:", error.message);
      setAlert("An unexpected error occurred");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link to="/">Movify</Link>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.signUp}>Login to Movify</h2>
        <p
          className={
            alert
              ? alert === "Login Successful!"
                ? styles.success
                : styles.error
              : styles.notError
          }
        >
          {alert}
        </p>

        {/* Email input field */}
        <div className={styles.inputContainer}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
          />
        </div>

        {/* Password input field */}
        <div className={styles.inputContainer}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
            minLength={6}
          />
        </div>

        {/* Login button */}
        <button className={styles.loginButton} type="submit">
          Login
        </button>

        {/* Signup link */}
        <p className={styles.haveAccount}>
          Don't have an account? <Link to="/auth/register">Signup</Link>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
