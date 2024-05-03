import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import { Link } from "react-router-dom";
import { login } from "../../service/auth";
function LoginForm() {
  const [formData, setFormData] = useState({
    userName: "",
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFocus = (e) => {
    e.target.classList.add(styles.inputFocused);
  };

  const handleBlur = (e) => {
    e.target.classList.remove(styles.inputFocused);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(formData);
      if (response.error) {
        setError(response.error);
      }
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link to="/">Movify</Link>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.signUp}>Login to Movify</h2>
        <p className={error ? styles.error : styles.notError}>{error}!</p>

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
          />
        </div>

        <button className={styles.loginButton} type="submit">
          Login
        </button>
        <p className={styles.haveAccount}>
          Don't have an account? <Link to="/auth/register">Signup</Link>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
