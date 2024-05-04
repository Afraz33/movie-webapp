// ======> Model imports <=======
const Movies = require("../models/movieModel");
const Reviews = require("../models/reviewModel");

// Function to fetch all movies
const getAllMovies = async () => {
  try {
    const allMovies = await Movies.find();
    if (allMovies.length === null) {
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

    const moviesByTitle = await Movies.findOne({
      title: { $regex: title, $options: "i" },
    });
    return moviesByTitle;
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

//function to get top reviewed movies
async function getTopReviewedMovies(limit = 10) {
  try {
    const topReviewedMovies = await Reviews.aggregate([
      {
        $group: {
          _id: "$movieTitle",
          reviewCount: { $sum: 1 },
        },
      },
      { $sort: { reviewCount: -1 } },
      { $limit: limit },
    ]);

    const moviesWithYear = await Promise.all(
      topReviewedMovies.map(async (movie) => {
        const movieData = await Movies.findOne({ title: movie._id });
        const year = movieData ? movieData.year : null;
        return { movieTitle: movie._id, reviewCount: movie.reviewCount, year };
      })
    );

    return moviesWithYear;
  } catch (error) {
    throw new Error("Error fetching top reviewed movies: " + error.message);
  }
}

module.exports = {
  getAllMovies,
  searchMoviesByTitle,
  createMovie,
  deleteMovie,
  getTopReviewedMovies,
};
