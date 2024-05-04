import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MovieReviewsList.module.css";
import MovieReviews from "../movieReviews/MovieReviews";
import { IoMdAdd } from "react-icons/io";

import { imagePictures } from "../../common/data/images";
function MovieReviewsList({ movieTitle }) {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);
  const [isAddingReview, setIsAddingReview] = useState(false);
  const [newReviewText, setNewReviewText] = useState("");

  const token = localStorage.getItem("token");
  const userName = localStorage.getItem("user name");
  console.log("token is:", token);
  const fetchReviews = async () => {
    try {
      // Make an API request to fetch reviews based on the movie title
      const response = await fetch(
        `http://localhost:8000/reviews/movie/${encodeURIComponent(movieTitle)}`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include token as Authorization header
          },
        }
      );
      const data = await response.json();
      console.log(data);
      setReviews(data); // Assuming the response contains an array of reviews
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };
  useEffect(() => {
    fetchReviews();
  }, [movieTitle]);

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
        fetchReviews(); // Fetch reviews again to update the list
      } else {
        console.error("Failed to delete review");
      }
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };
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
          body: JSON.stringify({ reviewId: reviewId, reviewText: updatedText }),
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

  const handleAddText = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/auth/login");
      return;
    }
    setIsAddingReview(true);
  };

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
          userName: userName,
          movieTitle: movieTitle,
          reviewText: newReviewText,
        }),
      });

      if (response.ok) {
        // If review added successfully, fetch updated reviews
        fetchReviews();
        // Reset newReviewText and hide the textarea
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
            <p style={{ color: "gray" }}>Login to add reviews</p>
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
