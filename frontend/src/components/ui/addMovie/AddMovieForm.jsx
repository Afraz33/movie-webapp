import React, { useState } from "react";
import styles from "./AddMovieForm.module.css";
import { Link } from "react-router-dom";

function AddMovieForm() {
  // State variables for form data and alert message
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    year: "",
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
      const response = await fetch(`http://localhost:8000/movies`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        setAlert("Movie added successfully");
        alert("Movie added successfully");
      } else {
        setAlert(data.error, "!" || "Failed to add movie");
        alert(data.error, "!" || "Failed to add movie");
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
        {/* Title input field */}
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
        {/* Description input field */}
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
        {/* Year input field */}
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
        {/* Add Movie button */}
        <button className={styles.signupButton} type="submit">
          Add Movie
        </button>
        {/* Back to Home link */}
        <p className={styles.haveAccount}>
          <Link to="/">Back to Home</Link>
        </p>
      </form>
    </div>
  );
}

export default AddMovieForm;
