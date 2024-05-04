import movieListStyles from "./SearchMovies.module.css";
import { imagePictures } from "../../common/data/images";

//project import
import MovieCard from "../sideMovieCard/MovieCard";

function SearchMovies() {
  return (
    <div className={movieListStyles.sideMoviesContainer}>
      <div className={movieListStyles.topMovies}>
        {imagePictures.map((imagePicture, i) => (
          <MovieCard key={i} imageSrc={imagePicture.src} />
        ))}
      </div>
    </div>
  );
}

export default SearchMovies;
