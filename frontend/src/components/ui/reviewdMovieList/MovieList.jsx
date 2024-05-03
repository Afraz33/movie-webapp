import movieListStyles from "./MovieList.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// Import Swiper styles
import "swiper/css";

import { imagePictures } from "../../common/data/images";
//project import

import MovieCard from "../sideMovieCard/MovieCard";
function MovieList() {
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
        {imagePictures.map((imagePicture, i) => (
          <MovieCard key={i} imageSrc={imagePicture.src} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
