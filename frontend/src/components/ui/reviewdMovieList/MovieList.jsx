import movieListStyles from "./MovieList.module.css";
import { useState, useEffect } from "react";

//default image data
import { imagePictures } from "../../common/data/images";

//project import
import MovieCard from "../sideMovieCard/MovieCard";

function ReviewedMovieList() {
  const [topReviewedMovies, setTopReviewedMovies] = useState([]);

  useEffect(() => {
    // Fetch the most reviewed movies when the component mounts
    async function fetchTopReviewedMovies() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/movies/top-reviewed`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch top reviewed movies");
        }
        const data = await response.json();
        setTopReviewedMovies(data.topReviewedMovies);
      } catch (error) {
        console.error("Error fetching top reviewed movies:", error);
      }
    }

    fetchTopReviewedMovies();
  }, []);
  return (
    <div className={movieListStyles.sideMoviesContainer}>
      <h3
        style={{
          marginBottom: "10px",
          color: "white",
          width: "20rem",
          padding: "3px 10px",
        }}
      >
        Most Reviewed
      </h3>
      <div className={movieListStyles.topMovies}>
        {topReviewedMovies.length === 0 && (
          <div className={movieListStyles.noMovies}>
            <h3 style={{ color: "gray" }}>No Movies for reviews</h3>
          </div>
        )}
        {topReviewedMovies?.map((movie, i) => (
          <MovieCard key={i} movie={movie} imageIndex={i} />
        ))}
      </div>
    </div>
  );
}

export default ReviewedMovieList;
