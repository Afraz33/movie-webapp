// Hero.jsx

import React from "react";
import heroStyles from "./Hero.module.css";

//project import
import HeroCarousel from "../heroCarousel/HeroCarousel";
import ReviewedMovieList from "../reviewdMovieList/MovieList";

function Hero() {
  return (
    <div className={heroStyles.hero}>
      <HeroCarousel />
      <ReviewedMovieList />
    </div>
  );
}

export default Hero;
