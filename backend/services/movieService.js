const Movies = require("../models/movieModel");

// Function to fetch all movies
const getAllMovies = async () => {
  try {
    const allMovies = await Movies.find();
    if (allMovies.length === 0) {
      throw new Error("No movies found");
    }
    return allMovies;
  } catch (error) {
    throw error;
  }
};

// Function to search movies by title
const searchMoviesByTitle = async (title) => {
  try {
    if (!title) {
      throw new Error("title required");
    }

    const moviesByTitle = await Movies.find({
      title: { $regex: title, $options: "i" },
    });
    if (moviesByTitle.length === 0) {
      return null;
    } else return moviesByTitle;
  } catch (error) {
    throw error;
  }
};

// Function to create a new movie
const createMovie = async (movieData) => {
  try {
    if (!movieData.title || !movieData.description || !movieData.year) {
      throw new Error("Missing required fields");
    }

    const existingMovie = await Movies.findOne({ title: movieData.title });
    if (existingMovie) {
      throw new Error("Movie with the same name already exists");
    }
    const movie = new Movies(movieData);
    await movie.save();
    return movie;
  } catch (error) {
    throw error;
  }
};

// Function to delete a movie
const deleteMovie = async (title) => {
  try {
    if (!title) {
      throw new Error("title required");
    }

    const deletedMovie = await Movies.findOneAndDelete({ title: title });

    if (!deletedMovie) {
      throw new Error("Error deleating movie");
    }

    return deletedMovie;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllMovies,
  searchMoviesByTitle,
  createMovie,
  deleteMovie,
};
