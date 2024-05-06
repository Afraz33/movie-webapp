import movieCardStyles from "./MovieCard.module.css";
import { MdRateReview } from "react-icons/md";
import { useNavigate } from "react-router-dom";

//image default data
import { imagePictures } from "../../common/data/images";

function SearchMovieCard({ setSearchResultsOpen, movie, imageIndex }) {
  const navigate = useNavigate();

  // Ensure that the image index remains within the bounds of available images
  imageIndex = imageIndex % imagePictures.length;

  // Handler function to navigate to the movie details page
  const handleClick = () => {
    setSearchResultsOpen(false);
    const movieUrl = `/movie/${encodeURIComponent(movie.title)}`;
    navigate(movieUrl);
  };

  //truncate text to 100 characters
  const truncatedDescription =
    movie.description.length > 100
      ? `${movie.description.substring(0, 100)}...`
      : movie.description;

  return (
    <div onClick={handleClick} className={movieCardStyles.movieCard}>
      {/* Display the movie image */}
      <img
        className={movieCardStyles.movieImage}
        src={movie.imageUrl}
        alt={movie.title} // Add alt text for accessibility
      />
      {/* Display movie information */}
      <div className={movieCardStyles.movieTextContainer}>
        <p className={movieCardStyles.movieTitle}>{movie.title}</p>
        <p className={movieCardStyles.movieYear}>{movie.year}</p>
        {/* Display review count and review icon */}
        <div className={movieCardStyles.moiveReviewContainer}>
          <p className={movieCardStyles.reviews}>{truncatedDescription} </p>
        </div>
      </div>
    </div>
  );
}

export default SearchMovieCard;
