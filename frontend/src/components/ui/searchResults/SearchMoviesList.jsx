import movieListStyles from "./SearchMovies.module.css";
import { imagePictures } from "../../common/data/images";

//project import
import MovieCard from "../sideMovieCard/MovieCard";
import SearchMovieCard from "../searchMovieCard/MovieCard";

function SearchMovies({ movieData }) {
  return (
    <div className={movieListStyles.sideMoviesContainer}>
      <div className={movieListStyles.topMovies}>
        {movieData.length === 0 ? (
          <div
            style={{
              color: "white",
              width: "50%",
              margin: "0 auto",
              padding: "50px 0px",
            }}
          >
            <h3 style={{ textAlign: "center" }}>No Movies Found</h3>
          </div>
        ) : (
          movieData.map((movie, i) => <SearchMovieCard movie={movie} key={i} />)
        )}
      </div>
    </div>
  );
}

export default SearchMovies;
