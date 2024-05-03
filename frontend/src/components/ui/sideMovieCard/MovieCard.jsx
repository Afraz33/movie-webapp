import movieCardStyles from "./MovieCard.module.css";
import { MdRateReview } from "react-icons/md";
function MovieCard({ imageSrc }) {
  return (
    <div className={movieCardStyles.movieCard}>
      <img className={movieCardStyles.movieImage} src={imageSrc} />
      <div className={movieCardStyles.movieTextContainer}>
        <p className={movieCardStyles.movieTitle}>
          Batman : The Dark Knight Rises
        </p>
        <p className={movieCardStyles.movieYear}>2001</p>
        <div className={movieCardStyles.moiveReviewContainer}>
          <p className={movieCardStyles.reviews}>100 </p>
          <MdRateReview style={{ color: "gold" }} />
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
