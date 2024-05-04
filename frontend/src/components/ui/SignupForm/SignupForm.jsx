import React, { useState } from "react";
import styles from "./SignupForm.module.css";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SignUpForm() {
  const navigate = useNavigate();

  // State for form data and alert message
  const [formData, setFormData] = useState({
    userName: "",
    name: "",
    email: "",
    password: "",
  });
  const [alert, setAlert] = useState("");

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to add focus class on input focus
  const handleFocus = (e) => {
    e.target.classList.add(styles.inputFocused);
  };

  // Function to remove focus class on input blur
  const handleBlur = (e) => {
    e.target.classList.remove(styles.inputFocused);
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8000/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
      if (data.error) {
        setAlert(data.error);
      } else if (data.user) {
        setAlert("Signup Successful");
        setTimeout(() => {
          navigate("/auth/login");
        }, 1200);
      }
    } catch (error) {
      console.error("Sign up failed:", error.message);
      setAlert("An unexpected error occurred");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link to="/">Movify</Link>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.signUp}>Create Account</h2>
        {/* Alert message */}
        <p
          className={
            alert
              ? alert === "Signup Successful"
                ? styles.success
                : styles.error
              : styles.notError
          }
        >
          {alert}!
        </p>
        {/* Username input */}
        <div className={styles.inputContainer}>
          <label htmlFor="userName">Username</label>
          <input
            type="text"
            name="userName"
            id="userName"
            placeholder="Enter your username"
            value={formData.userName}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
          />
        </div>
        {/* Name input */}
        <div className={styles.inputContainer}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
          />
        </div>
        {/* Email input */}
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
        {/* Password input */}
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

        {/* Submit button */}
        <button className={styles.signupButton} type="submit">
          Sign Up
        </button>
        {/* Link to login page */}
        <p className={styles.haveAccount}>
          Have an account? <Link to="/auth/login">Log in</Link>
        </p>
      </form>
    </div>
  );
}

export default SignUpForm;
