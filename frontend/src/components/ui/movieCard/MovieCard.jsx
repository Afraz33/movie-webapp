import movieCardStyles from "./MovieCard.module.css";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { imagePictures } from "../../common/data/images";
function MovieCard({ movie, imageIndex }) {
  return (
    <div className={movieCardStyles.movieCard}>
      <div>
        <img
          className={movieCardStyles.movieImage}
          src={imagePictures[imageIndex].src}
        />
      </div>
      <div className={movieCardStyles.movieTextContainer}>
        <p className={movieCardStyles.movieTitle}>{movie.title}</p>
        <p className={movieCardStyles.movieYear}>{movie.year}</p>
      </div>
      <div className={movieCardStyles.bookmarkIcon}>
        <BsBookmarkPlusFill style={{ width: "30px", height: "30px" }} />
      </div>
    </div>
  );
}

export default MovieCard;
