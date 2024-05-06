import movieCardStyles from "./MovieCard.module.css";
import { MdRateReview } from "react-icons/md";
import { useNavigate } from "react-router-dom";

//image default data
import { imagePictures } from "../../common/data/images";

function MovieCard({ movie, imageIndex }) {
  const navigate = useNavigate();

  // Ensure that the image index remains within the bounds of available images
  imageIndex = imageIndex % imagePictures.length;

  // Handler function to navigate to the movie details page
  const handleClick = () => {
    localStorage.setItem("imageIndex", imageIndex);
    // Encode the movie title to handle special characters in the URL
    const movieUrl = `/movie/${encodeURIComponent(movie.movieTitle)}`;
    navigate(movieUrl);
  };

  return (
    <div onClick={handleClick} className={movieCardStyles.movieCard}>
      {/* Display the movie image */}
      <img
        className={movieCardStyles.movieImage}
        src={movie.imageUrl}
        alt={movie.movieTitle} // Add alt text for accessibility
      />
      {/* Display movie information */}
      <div className={movieCardStyles.movieTextContainer}>
        <p className={movieCardStyles.movieTitle}>{movie.movieTitle}</p>
        <p className={movieCardStyles.movieYear}>{movie.year}</p>
        {/* Display review count and review icon */}
        <div className={movieCardStyles.moiveReviewContainer}>
          <p className={movieCardStyles.reviews}>{movie.reviewCount} </p>
          <MdRateReview style={{ color: "gold" }} />
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
