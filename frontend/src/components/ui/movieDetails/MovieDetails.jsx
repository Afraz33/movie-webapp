import styles from "./MovieDetails.module.css";

function MovieDetails({ movieData }) {
  return (
    <div className={styles.container}>
      <div className={styles.movieInfoContainer}>
        <img className={styles.movieImage} src="/images/avengers.webp" />
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
