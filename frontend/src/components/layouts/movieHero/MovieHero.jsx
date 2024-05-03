import styles from "./MovieHero.module.css";

import MovieVideo from "../../ui/movieVideo/MovieVideo";
import MovieDetails from "../../ui/movieDetails/MovieDetails";
function MovieHero() {
  return (
    <div className={styles.MovieHeroContainer}>
      <MovieVideo />
      <MovieDetails />
    </div>
  );
}

export default MovieHero;
