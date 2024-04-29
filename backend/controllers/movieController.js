// Import movie service functions
const movieService = require("../services/movieService");

//Controller function to fetch all movies
const getAllMovies = async (req, res) => {
  try {
    const allMovies = await movieService.getAllMovies();
    res.status(200).json(allMovies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Controller function to search movies by title
const searchMoviesByTitle = async (req, res) => {
  const { title } = req.query.title;
  try {
    const moviesByTitle = await movieService.searchMoviesByTitle(title);
    res.status(200).json(moviesByTitle);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller function to create a new movie
const addMovie = async (req, res) => {
  const movieData = req.body;
  try {
    const newMovie = await movieService.createMovie(movieData);
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller function to delete a movie
const deleteMovie = async (req, res) => {
  console.log(req.params);
  const { title } = req.params;
  try {
    const deletedMovie = await movieService.deleteMovie(title);
    res.status(200).json(deletedMovie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllMovies,
  searchMoviesByTitle,
  addMovie,
  deleteMovie,
};
