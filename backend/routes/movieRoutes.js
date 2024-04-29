const {
  addMovie,
  deleteMovie,
  getAllMovies,
  searchMoviesByTitle,
} = require("../controllers/movieController");

const movieRoutes = require("express").Router();

//movie routes
movieRoutes.post("/addMovie", addMovie);

// Route for deleting a movie by title
movieRoutes.delete("/deleteMovie/:title", deleteMovie);

// Route for retrieving all movies
movieRoutes.get("/getAllMovies", getAllMovies);

// Route for searching movies by title
movieRoutes.get("/searchMovies", searchMoviesByTitle);
module.exports = movieRoutes;
