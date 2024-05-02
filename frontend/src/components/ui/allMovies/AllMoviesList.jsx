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
function MovieList() {
  const [slidesPerView, setSlidesPerView] = useState(5);
  useEffect(() => {
    const breakpoints = [
      { width: 1200, slides: 4 },
      { width: 768, slides: 3 },
      { width: 480, slides: 1 },
      // Add more breakpoints if needed
    ];

    const handleResize = () => {
      const { slides } = breakpoints.find(
        ({ width }) => window.innerWidth <= width
      ) || { slides: 5 };
      setSlidesPerView(slides);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call initially
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
        // spaceBetween={50}
        // navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        slidesPerView={2}
        loop={true}
        autoplay={{ delay: 3000 }}
        // width={500}
        // height={300}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className={AllMoviesListStyles.SwiperSlide}>
          {" "}
          <MovieCard />
        </SwiperSlide>
        <SwiperSlide className={AllMoviesListStyles.SwiperSlide}>
          {" "}
          <MovieCard />
        </SwiperSlide>
        <SwiperSlide className={AllMoviesListStyles.SwiperSlide}>
          {" "}
          <MovieCard />
        </SwiperSlide>
        <SwiperSlide className={AllMoviesListStyles.SwiperSlide}>
          {" "}
          <MovieCard />
        </SwiperSlide>
        <SwiperSlide className={AllMoviesListStyles.SwiperSlide}>
          {" "}
          <MovieCard />
        </SwiperSlide>
        <SwiperSlide className={AllMoviesListStyles.SwiperSlide}>
          {" "}
          <MovieCard />
        </SwiperSlide>
        <SwiperSlide className={AllMoviesListStyles.SwiperSlide}>
          {" "}
          <MovieCard />
        </SwiperSlide>
        {/* <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard /> */}
      </Swiper>
    </div>
  );
}

export default MovieList;
