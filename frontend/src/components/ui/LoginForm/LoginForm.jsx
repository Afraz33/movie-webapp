import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginForm.module.css";
import { Link } from "react-router-dom";
import { login } from "../../service/auth";
import { UserContext } from "../../../context/UserContext";
function LoginForm() {
  const { user, updateUser } = useContext(UserContext);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: "",
    name: "",
    email: "",
    password: "",
  });
  const [alert, setAlert] = useState("");
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
      const response = await fetch(`http://localhost:8000/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
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

      localStorage.setItem("user name", data.userName);
      localStorage.setItem("email", data.email);
      localStorage.setItem("token", data.token);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (alert) {
      console.alert("Login failed:", alert.message);
      setAlert("An unexpected alert occurred");
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
