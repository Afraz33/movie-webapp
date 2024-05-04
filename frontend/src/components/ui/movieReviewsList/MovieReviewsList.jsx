import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MovieReviewsList.module.css";
import { IoMdAdd } from "react-icons/io";

// Project import
import MovieReviews from "../movieReviews/MovieReviews";

function MovieReviewsList({ movieTitle }) {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);
  const [isAddingReview, setIsAddingReview] = useState(false);
  const [newReviewText, setNewReviewText] = useState("");

  //accessing user info from local storage
  const token = localStorage.getItem("token");
  const userName = localStorage.getItem("user name");

  // Function to fetch reviews for the specified movie
  const fetchReviews = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/reviews/movie/${encodeURIComponent(movieTitle)}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch reviews");
      }
      const data = await response.json();
      setReviews(data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [movieTitle]);

  // Function to handle deletion of a review
  const handleDeleteReview = async (reviewId) => {
    try {
      const response = await fetch(
        `http://localhost:8000/reviews/${reviewId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        fetchReviews();
      } else {
        console.error("Failed to delete review");
      }
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };

  // Function to handle updating a review
  const handleUpdateReview = async (reviewId, updatedText) => {
    try {
      const response = await fetch(
        `http://localhost:8000/reviews/${reviewId}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ reviewText: updatedText }),
        }
      );
      if (response.ok) {
        fetchReviews();
      } else {
        console.error("Failed to update review");
      }
    } catch (error) {
      console.error("Error updating review:", error);
    }
  };

  // Function to initiate adding a review or redirect if no token exists
  const handleAddText = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("You need to login to add a review!");
      navigate("/auth/login");
      return;
    }
    setIsAddingReview(true);
  };

  // Function to handle adding a new review
  const handleAddReview = async () => {
    if (newReviewText.trim() === "") {
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/reviews", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          movieTitle: movieTitle,
          reviewText: newReviewText,
          userName: userName,
        }),
      });

      if (response.ok) {
        fetchReviews();
        setNewReviewText("");
        setIsAddingReview(false);
      } else {
        console.error("Failed to add review");
      }
    } catch (error) {
      console.error("Error adding review:", error);
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.reviewsList}>
        {reviews.length === 0 ? (
          <div className={styles.noReviews}>
            <h2>No Reviews</h2>
          </div>
        ) : (
          <p className={styles.heading}>Reviews</p>
        )}

        {reviews?.map((review, index) => (
          <MovieReviews
            onDelete={handleDeleteReview}
            onUpdate={handleUpdateReview}
            key={index}
            review={review}
          />
        ))}
      </div>

      {isAddingReview ? (
        <div className={styles.addReviewContainer}>
          <textarea
            className={styles.reviewTextEdit}
            value={newReviewText}
            onChange={(e) => setNewReviewText(e.target.value)}
          />
          <div className={styles.reviewActions}>
            <button className={styles.save} onClick={handleAddReview}>
              Add
            </button>
            <button
              className={styles.cancel}
              onClick={() => setIsAddingReview(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <button className={styles.addMovie} onClick={handleAddText}>
          {" "}
          Add a review <IoMdAdd />
        </button>
      )}
    </section>
  );
}

export default MovieReviewsList;
