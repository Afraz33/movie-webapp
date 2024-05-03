import styles from "./MovieReviewsList.module.css";
import MovieReviews from "../movieReviews/MovieReviews";
import { IoMdAdd } from "react-icons/io";
import { imagePictures } from "../../common/data/images";
function MovieReviewsList() {
  return (
    <section className={styles.container}>
      <p className={styles.heading}>Reviews</p>
      <div className={styles.reviewsList}>
        <MovieReviews />
        <MovieReviews />
        <MovieReviews />
        <MovieReviews />
        <MovieReviews />
        <MovieReviews />
      </div>
      <button className={styles.addMovie}>
        {" "}
        Add a review <IoMdAdd />
      </button>
    </section>
  );
}

export default MovieReviewsList;
