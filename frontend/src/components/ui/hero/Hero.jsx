// Hero.jsx

import React from "react";
import heroStyles from "./Hero.module.css";

//project import
import HeroCarousel from "../heroCarousel/HeroCarousel";
import MovieList from "../reviewdMovieList/movieList";
import AllMoviesList from "../allMovies/AllMoviesList";
import Footer from "../footer/Footer";
function Hero() {
  return (
    <div className={heroStyles.hero}>
      <HeroCarousel />
      <MovieList />
    </div>
  );
}

export default Hero;
