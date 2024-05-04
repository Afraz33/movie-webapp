import styles from "./MovieHero.module.css";

import MovieVideo from "../../ui/movieVideo/MovieVideo";
import MovieDetails from "../../ui/movieDetails/MovieDetails";
function MovieHero({ movieData }) {
  // generate a random number to have a random trailer from default trailers play
  const randomVideoIndex = Math.floor(Math.random() * 5);
  return (
    <div className={styles.MovieHeroContainer}>
      <MovieVideo index={randomVideoIndex} />
      <MovieDetails movieData={movieData} />
    </div>
  );
}

export default MovieHero;
