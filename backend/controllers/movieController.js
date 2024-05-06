// Import movie service functions
const movieService = require("../services/movieService");
const reviewService = require("../services/reviewService");
//Controller function to fetch all movies
const getAllMovies = async (req, res) => {
  try {
    const allMovies = await movieService.getAllMovies();
    if (!allMovies) {
      return res.status(404).json({ message: "No movies found" });
    }
    res.status(200).json(allMovies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Controller function to search movies with a specific string
//or a title (which is unique for each movie so it will result in one record)
const searchMovies = async (req, res) => {
  try {
    const { title } = req.query;
    if (!title) {
      throw new Error("title required");
    }
    const moviesByWord = await movieService.searchMovies(title);

    if (!moviesByWord) {
      return res.status(404).json({ message: "No movies found" });
    }
    res.status(200).json(moviesByWord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller function to create a new movie
const addMovie = async (req, res) => {
  try {
    const movieData = req.body;
    if (
      !movieData.title ||
      !movieData.description ||
      !movieData.year ||
      !movieData.imageUrl ||
      !movieData.trailerUrl
    ) {
      throw new Error("Missing required fields");
    }

    if (movieData.year < 1900 || movieData.year > 2024) {
      throw new Error("Year should be bewteen 1900 - 2024");
    }

    const newMovie = await movieService.createMovie(movieData);
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller function to delete a movie
const deleteMovieAndReviews = async (req, res, next) => {
  try {
    const { title } = req.params;
    if (!title) {
      throw new Error("title required");
    }
    const deletedMovie = await movieService.deleteMovie(title);

    // Delete all reviews for the movie
    await reviewService.deleteAllReviews(title);

    res.status(200).json({
      deletedMovie,
      message: `All reviews for ${title} deleted successfully`,
    });
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//controller function to get top reviewed movies
async function getTopReviewedMovies(req, res) {
  try {
    const topReviewedMovies = await movieService.getTopReviewedMovies();

    res.status(200).json({ topReviewedMovies });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

//get movie info for a particular title
const getMovieInfo = async (req, res) => {
  try {
    const title = req.query.title;
    if (!title) {
      throw new Error("Title is missing");
    }

    const movie = await movieService.getMovieByTitle(title);

    return res.status(200).json(movie);
  } catch (error) {
    console.error("Error fetching movie by title:", error);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllMovies,
  searchMovies,
  addMovie,
  deleteMovieAndReviews,
  getTopReviewedMovies,
  getMovieInfo,
};
