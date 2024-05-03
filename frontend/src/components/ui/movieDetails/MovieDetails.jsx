import styles from "./MovieDetails.module.css";

function MovieDetails() {
  return (
    <div className={styles.container}>
      <div className={styles.movieInfoContainer}>
        <img className={styles.movieImage} src="/images/avengers.webp" />
        <div className={styles.movieInfo}>
          <p className={styles.movieTitle}>Batman:The Dark Knight</p>
          <p className={styles.movieYear}>2001</p>
        </div>
      </div>
      <div className={styles.horizontalLine}></div>

      <div className={styles.summary}>
        <p className={styles.summaryTitle}>Summary</p>
        <div className={styles.summaryText}>
          Simba, having become king of the Pride Lands, is determined for his
          cub to follow in his paw prints while the origins of his late father
          Mufasa are explored.
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
