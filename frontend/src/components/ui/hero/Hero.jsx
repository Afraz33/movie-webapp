// Hero.jsx

import React from "react";
import heroStyles from "./Hero.module.css";

//project import
import HeroCarousel from "../heroCarousel/HeroCarousel";
import MovieList from "../reviewdMovieList/movieList";
import AllMoviesList from "../allMovies/AllMoviesList";
function Hero() {
  return (
    <div className={heroStyles.hero}>
      <HeroCarousel />
      <MovieList />
      <AllMoviesList />
    </div>
  );
}

export default Hero;
