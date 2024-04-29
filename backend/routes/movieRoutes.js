const { verify } = require("jsonwebtoken");
const {
  addMovie,
  deleteMovie,
  getAllMovies,
  searchMoviesByTitle,
} = require("../controllers/movieController");

const { verifyUser } = require("../middleware/authMiddleware");

//Initializing router
const movieRoutes = require("express").Router();

//movie routes
movieRoutes.post("/addMovie", verifyUser, addMovie);

// Route for deleting a movie by title
movieRoutes.delete("/deleteMovie/:title", verifyUser, deleteMovie);

// Route for retrieving all movies
movieRoutes.get("/getAllMovies", getAllMovies);

// Route for searching movies by title
movieRoutes.get("/searchMovies", searchMoviesByTitle);
module.exports = movieRoutes;
