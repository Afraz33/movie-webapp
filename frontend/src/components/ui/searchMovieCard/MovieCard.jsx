import movieCardStyles from "./MovieCard.module.css";
import { MdRateReview } from "react-icons/md";
import { useNavigate } from "react-router-dom";

//image default data
import { imagePictures } from "../../common/data/images";

function SearchMovieCard({ movie, imageIndex }) {
  const navigate = useNavigate();

  // Ensure that the image index remains within the bounds of available images
  imageIndex = imageIndex % imagePictures.length;

  // Handler function to navigate to the movie details page
  const handleClick = () => {
    localStorage.setItem("imageIndex", imageIndex);
    // Encode the movie title to handle special characters in the URL
    const movieUrl = `/movie/${encodeURIComponent(movie.title)}`;
    navigate(movieUrl);
  };

  console.log(movie);

  return (
    <div onClick={handleClick} className={movieCardStyles.movieCard}>
      {/* Display the movie image */}
      <img
        className={movieCardStyles.movieImage}
        src={imagePictures[0].src}
        alt={movie.title} // Add alt text for accessibility
      />
      {/* Display movie information */}
      <div className={movieCardStyles.movieTextContainer}>
        <p className={movieCardStyles.movieTitle}>{movie.title}</p>
        <p className={movieCardStyles.movieYear}>{movie.year}</p>
        {/* Display review count and review icon */}
      </div>
    </div>
  );
}

export default SearchMovieCard;
