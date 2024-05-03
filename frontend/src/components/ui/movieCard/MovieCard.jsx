import movieCardStyles from "./MovieCard.module.css";
import { BsBookmarkPlusFill } from "react-icons/bs";
function MovieCard() {
  return (
    <div className={movieCardStyles.movieCard}>
      <div>
        <img
          className={movieCardStyles.movieImage}
          src="/images/avengers.webp"
        />
      </div>
      <div className={movieCardStyles.movieTextContainer}>
        <p className={movieCardStyles.movieTitle}>
          Batman : The Dark Knight Rises
        </p>
        <p className={movieCardStyles.movieYear}>2001</p>
      </div>
      <div className={movieCardStyles.bookmarkIcon}>
        <BsBookmarkPlusFill style={{ width: "30px", height: "30px" }} />
      </div>
    </div>
  );
}

export default MovieCard;
