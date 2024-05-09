import { useState, useEffect } from "react";
import AllMoviesListStyles from "./AllMoviesList.module.css";

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
//project import

import MovieCard from "../movieCard/MovieCard";

function MovieList({ movies }) {
  const [slidesPerView, setSlidesPerView] = useState(5);
  useEffect(() => {
    const breakpoints = [
      { width: 1200, slides: 4 },
      { width: 768, slides: 3 },
      { width: 480, slides: 1 },
    ];

    const handleResize = () => {
      const { slides } = breakpoints.find(
        ({ width }) => window.innerWidth <= width
      ) || { slides: 5 };
      setSlidesPerView(slides);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className={AllMoviesListStyles.allMoviesContainer}>
      <h3
        style={{
          marginBottom: "10px",
          color: "white",
          width: "20rem",
          padding: "3px 10px",
        }}
      >
        All Movies
      </h3>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        className={AllMoviesListStyles.swiper}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          540: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1000: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
          },
        }}
        pagination={{ clickable: true }}
        // centeredSlides={true}

        loop={true}
        initialSlide={3}
        autoplay={{ delay: 3000 }}
      >
        {movies.map((movie, i) => (
          <SwiperSlide key={i} className={AllMoviesListStyles.SwiperSlide}>
            <MovieCard movie={movie} imageIndex={i} />
          </SwiperSlide>
        ))}
      </Swiper>
      {movies.length === 0 && (
        <div className={AllMoviesListStyles.noMovies}>
          <h2 style={{ color: "gray" }}>No Movies Exist</h2>
        </div>
      )}
    </div>
  );
}

export default MovieList;
