import movieCardStyles from "./MovieCard.module.css";

function MovieCard() {
  return (
    <div className={movieCardStyles.movieCard}>
      <img className={movieCardStyles.movieImage} src="/images/avengers.webp" />
      <div className={movieCardStyles.movieTextContainer}>
        <p className={movieCardStyles.movieTitle}>
          Batman : The Dark Knight Rises
        </p>
        <p className={movieCardStyles.movieYear}>2001</p>
      </div>
    </div>
  );
}

export default MovieCard;
