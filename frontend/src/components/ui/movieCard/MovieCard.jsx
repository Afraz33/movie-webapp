import movieCardStyles from "./MovieCard.module.css";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

//default image data
import { imagePictures } from "../../common/data/images";

function MovieCard({ movie, imageIndex }) {
  const navigate = useNavigate();

  //imageIndex is within the range of available default images
  imageIndex = imageIndex % imagePictures.length;

  // Function to handle clicking on the movie card
  const handleClick = () => {
    localStorage.setItem("imageIndex", imageIndex);
    const movieUrl = `/movie/${encodeURIComponent(movie.title)}`;
    navigate(movieUrl);
  };

  return (
    <div className={movieCardStyles.movieCard} onClick={handleClick}>
      {/* Movie image */}
      <div>
        <img
          className={movieCardStyles.movieImage}
          src={imagePictures[imageIndex].src}
        />
      </div>
      {/* Movie details */}
      <div className={movieCardStyles.movieTextContainer}>
        <p className={movieCardStyles.movieTitle}>{movie.title}</p>
        <p className={movieCardStyles.movieYear}>{movie.year}</p>
      </div>
      {/* Bookmark icon */}
      <div className={movieCardStyles.bookmarkIcon}>
        <BsBookmarkPlusFill style={{ width: "30px", height: "30px" }} />
      </div>
    </div>
  );
}

export default MovieCard;
