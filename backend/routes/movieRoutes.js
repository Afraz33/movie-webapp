const { verify } = require("jsonwebtoken");
const {
  addMovie,
  getMovieInfo,
  getAllMovies,
  searchMovies,
  getTopReviewedMovies,
  deleteMovieAndReviews,
} = require("../controllers/movieController");

const { verifyUser } = require("../middleware/authMiddleware");

//Initializing router
const movieRoutes = require("express").Router();

//movie routes
movieRoutes.post("/", addMovie);

// Route for deleting a movie by title
movieRoutes.delete("/:title", verifyUser, deleteMovieAndReviews);

// Route for retrieving all movies
movieRoutes.get("/", getAllMovies);

// Route for retrieving top viewed
movieRoutes.get("/top-reviewed", getTopReviewedMovies);

// Route for searching movies by for a random string
movieRoutes.get("/search", searchMovies);

//get a particular movie info from title
movieRoutes.get("/details", getMovieInfo);

module.exports = movieRoutes;
