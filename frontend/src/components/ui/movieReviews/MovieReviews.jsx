import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MovieReviews.module.css";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
function MovieReviews({ review, onDelete, onUpdate }) {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [editedReviewText, setEditedReviewText] = useState(review.reviewText);

  const handleDelete = () => {
    if (!token) {
      navigate("/auth/login");
    } else {
      onDelete(review.reviewId);
    }
  };

  const handleUpdate = () => {
    onUpdate(review.reviewId, editedReviewText);
  };

  const handleEdit = () => {
    if (!token) {
      navigate("/auth/login");
    } else setIsEditing(true);
  };

  const handleSave = () => {
    onUpdate(review.reviewId, editedReviewText);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedReviewText(review.reviewText);
    setIsEditing(false);
  };

  const handleTextChange = (event) => {
    setEditedReviewText(event.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.reviewInfo}>
        <p className={styles.userName}>{review.userName}</p>
        <p className={styles.reviewDate}>05-05-2020</p>
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
  );
}

export default MovieReviews;
