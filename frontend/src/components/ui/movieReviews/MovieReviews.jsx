import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MovieReviews.module.css";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

//toast
import { toast, ToastContainer } from "react-toastify";

// MovieReviews Component
function MovieReviews({ review, onDelete, onUpdate }) {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [editedReviewText, setEditedReviewText] = useState(review.reviewText);

  //accessing user info from local storage
  const userName = localStorage.getItem("user name");

  // Function to handle review deletion
  const handleDelete = () => {
    if (!token) {
      notifyInfo();
      setTimeout(() => {
        navigate("/auth/login");
      }, 1500);
    } else {
      onDelete(review.reviewId);
    }
  };

  // Function to handle review update
  const handleUpdate = () => {
    onUpdate(review.reviewId, editedReviewText);
  };

  // Function to handle edit mode
  const handleEdit = () => {
    if (!token) {
      notifyInfo();
      setTimeout(() => {
        navigate("/auth/login");
      }, 1500);
    } else setIsEditing(true);
  };

  // Function to save edited review
  const handleSave = () => {
    onUpdate(review.reviewId, editedReviewText);
    setIsEditing(false);
  };

  // Function to cancel editing
  const handleCancel = () => {
    setEditedReviewText(review.reviewText);
    setIsEditing(false);
  };

  // Function to handle text change in edit mode
  const handleTextChange = (event) => {
    setEditedReviewText(event.target.value);
  };

  const notifyInfo = () => {
    toast.info("You need to login first", {
      position: "top-center",
    });
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.reviewInfo}>
          <p className={styles.userName}>{review.userName}</p>
        </div>
        {isEditing ? (
          <textarea
            className={styles.reviewTextEdit}
            value={editedReviewText}
            onChange={handleTextChange}
          />
        ) : (
          <p className={styles.reviewText}>{review.reviewText}</p>
        )}
        {!isEditing ? (
          userName === review.userName && (
            <div className={styles.reviewActions}>
              <MdDelete
                className={styles.editIcon}
                style={{ cursor: "pointer" }}
                onClick={handleDelete}
              />
              <MdEdit
                className={styles.editIcon}
                style={{ cursor: "pointer" }}
                onClick={handleEdit}
              />
            </div>
          )
        ) : (
          <div className={styles.reviewActions}>
            <button onClick={handleSave} className={styles.save}>
              Save
            </button>
            <button onClick={handleCancel} className={styles.cancel}>
              Cancel
            </button>
          </div>
        )}
      </div>
      <ToastContainer autoClose={2000} />
    </>
  );
}

export default MovieReviews;
