import styles from "./MovieHero.module.css";

import MovieVideo from "../../ui/movieVideo/MovieVideo";
import MovieDetails from "../../ui/movieDetails/MovieDetails";
function MovieHero({ movieData }) {
  return (
    <div className={styles.MovieHeroContainer}>
      <MovieVideo />
      <MovieDetails movieData={movieData} />
    </div>
  );
}

export default MovieHero;
