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
import heroCarouselStyles from "./heroCarousel.module.css";

import { carouselData } from "../../common/data/images";
function heroCarousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      className={heroCarouselStyles.swiper}
      scrollbar={{ draggable: true }}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000 }}
    >
      {carouselData.map((carouselItem, i) => (
        <SwiperSlide key={i}>
          {" "}
          <img
            src={carouselItem.src}
            alt="Hero Image"
            className={heroCarouselStyles.heroImage}
          />
          <div className={heroCarouselStyles.textOverlay}>
            <div className={heroCarouselStyles.textContainer}>
              <p className={heroCarouselStyles.movieTitle}>
                {carouselItem.title}
              </p>
              <p className={heroCarouselStyles.watchTrailer}>
                Upcoming Movies in 2024
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
      ...
    </Swiper>
  );
}

export default heroCarousel;
