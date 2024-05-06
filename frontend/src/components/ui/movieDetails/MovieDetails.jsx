import styles from "./MovieDetails.module.css";

//import default image data
import { imagePictures } from "../../common/data/images";

function MovieDetails({ movieData }) {
  const imageIndex = localStorage.getItem("imageIndex");
  return (
    <div className={styles.container}>
      <div className={styles.movieInfoContainer}>
        <img className={styles.movieImage} src={imagePictures[0].src} />
        <div className={styles.movieInfo}>
          <p className={styles.movieTitle}>{movieData.title}</p>
          <p className={styles.movieYear}>{movieData.year}</p>
        </div>
      </div>
      <div className={styles.horizontalLine}></div>

      <div className={styles.summary}>
        <p className={styles.summaryTitle}>Summary</p>
        <div className={styles.summaryText}>{movieData.description}</div>
      </div>
    </div>
  );
}

export default MovieDetails;
