const { verify } = require("jsonwebtoken");
const {
  addMovie,
  deleteMovie,
  getAllMovies,
  searchMoviesByTitle,
  getTopReviewedMovies,
} = require("../controllers/movieController");

const { verifyUser } = require("../middleware/authMiddleware");

//Initializing router
const movieRoutes = require("express").Router();

//movie routes
movieRoutes.post("/", addMovie);

// Route for deleting a movie by title
movieRoutes.delete("/:title", verifyUser, deleteMovie);

// Route for retrieving all movies
movieRoutes.get("/", getAllMovies);

// Route for retrieving top viewed
movieRoutes.get("/top-reviewed", getTopReviewedMovies);

// Route for searching movies by title
movieRoutes.get("/search", searchMoviesByTitle);
module.exports = movieRoutes;
