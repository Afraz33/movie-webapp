import React, { useState } from "react";
import styles from "./AddMovieForm.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//toast
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddMovieForm() {
  const navigate = useNavigate();

  // State variables for form data and alert message
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    year: "2016",
    imageUrl: "",
    trailerUrl: "",
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

  // Function to handle keydown event for year input
  const handleYearKeyDown = (e) => {
    if (
      !/[0-9]/.test(e.key) &&
      ![
        "Backspace",
        "Delete",
        "ArrowLeft",
        "ArrowRight",
        "Tab",
        "Enter",
      ].includes(e.key)
    ) {
      e.preventDefault();
    }
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    if (formData.year < 1900 || formData.year > 2024) {
      notifyWarn();
      return;
    }
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
        notifySuccess();
        setTimeout(() => {
          navigate("/");
        }, 1500);
      } else {
        notifyWarn(data.error, "!" || "Failed to add movie");
        setAlert(data.error, "!" || "Failed to add movie");
      }
    } catch (error) {
      console.error("Error adding movie:", error.message);
      notifyWarn("An unexpected error occured");
      setAlert("An unexpected error occurred");
    }
  };

  const notifySuccess = () => {
    toast.success("Movie Added Successfully", {
      position: "top-center",
    });
  };

  const notifyWarn = (message) => {
    toast.warn(message, {
      position: "top-center",
    });
  };

  return (
    <>
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
          {/* image */}
          <div className={styles.inputContainer}>
            <label htmlFor="imageUrl">Image Url</label>
            <input
              name="imageUrl"
              id="Image Url"
              type="text"
              placeholder="Url for image"
              value={formData.imageUrl}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
          </div>

          {/* trailer url  */}
          <div className={styles.inputContainer}>
            <label htmlFor="trailerUrl">Trailer Url</label>
            <input
              name="trailerUrl"
              id="trailerUrl"
              type="text"
              placeholder="Trailer Url"
              value={formData.trailerUrl}
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
              type="number"
              min="1900"
              max="2024"
              step="1"
              name="year"
              id="year"
              placeholder="Release Year"
              value={formData.year}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
              onKeyDown={handleYearKeyDown}
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
      <ToastContainer autoClose={1500} toastClassName={styles.customToast} />
    </>
  );
}

export default AddMovieForm;
