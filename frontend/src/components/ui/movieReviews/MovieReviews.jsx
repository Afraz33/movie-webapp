import styles from "./MovieReviews.module.css";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
function MovieReviews() {
  return (
    <div className={styles.container}>
      <div className={styles.reviewInfo}>
        <p className={styles.userName}>afraz33</p>
        <p className={styles.reviewDate}>05-05-2020</p>
      </div>
      <p className={styles.reviewText}>
        Stars Ryan Gosling, Emily Blunt, Hannah Waddingham, and Winston Duke
        answer IMDb's Burning Questions. The cast reacts to the record-breaking
        cannon roll, shares why Hannah Waddingham has a song for everything, and
        unveils the origin of spicy margaritas in 'The Fall Guy.'{" "}
      </p>
      <div className={styles.reviewActions}>
        <MdDelete />
        <MdEdit />
      </div>
    </div>
  );
}

export default MovieReviews;
