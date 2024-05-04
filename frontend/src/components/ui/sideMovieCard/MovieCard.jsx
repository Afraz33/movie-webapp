import movieCardStyles from "./MovieCard.module.css";
import { MdRateReview } from "react-icons/md";
import { imagePictures } from "../../common/data/images";
import { useNavigate } from "react-router-dom";
function MovieCard({ movie, imageIndex }) {
  const navigate = useNavigate();

  imageIndex = imageIndex % imagePictures.length;
  //=======> handler functions <==========
  const handleClick = () => {
    const movieUrl = `/movie/${encodeURIComponent(movie.movieTitle)}`;
    navigate(movieUrl);
  };

  return (
    <div onClick={handleClick} className={movieCardStyles.movieCard}>
      <img
        className={movieCardStyles.movieImage}
        src={imagePictures[imageIndex].src}
      />
      <div className={movieCardStyles.movieTextContainer}>
        <p className={movieCardStyles.movieTitle}>{movie.movieTitle}</p>
        <p className={movieCardStyles.movieYear}>{movie.year}</p>
        <div className={movieCardStyles.moiveReviewContainer}>
          <p className={movieCardStyles.reviews}>{movie.reviewCount} </p>
          <MdRateReview style={{ color: "gold" }} />
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
