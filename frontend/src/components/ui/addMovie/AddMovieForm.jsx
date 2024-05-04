import React, { useState } from "react";
import styles from "./AddMovieForm.module.css";
import { Link } from "react-router-dom";

function AddMovieForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    year: "",
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
      const response = await fetch(`http://localhost:8000/movies`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setAlert("Movie added successfully");
      } else {
        setAlert(data.message || "Failed to add movie");
      }
    } catch (error) {
      console.error("Error adding movie:", error.message);
      setAlert("An unexpected error occurred");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link to="/">Movify</Link>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.signUp}>Add a Movie</h2>
        <p
          className={
            alert
              ? alert === "Movie added successfully"
                ? styles.success
                : styles.error
              : styles.notError
          }
        >
          {alert}
        </p>
        <div className={styles.inputContainer}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Movie Title"
            value={formData.title}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="description">Description</label>
          <textarea
            className={styles.textarea}
            name="description"
            id="description"
            placeholder="Movie Description"
            value={formData.description}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="year">Year</label>
          <input
            type="text"
            name="year"
            id="year"
            placeholder="Release Year"
            value={formData.year}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
          />
        </div>
        <button className={styles.signupButton} type="submit">
          Add Movie
        </button>
        <p className={styles.haveAccount}>
          <Link to="/">Back to Home</Link>
        </p>
      </form>
    </div>
  );
}

export default AddMovieForm;
