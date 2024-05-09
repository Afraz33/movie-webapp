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

// Function to get a movie movies by title
const getMovieByTitle = async (title) => {
  try {
    const moviesByTitle = await Movies.findOne({
      title: title,
    });
    return moviesByTitle;
  } catch (error) {
    throw error;
  }
};

//function to search movies with a provided string
//list of movies that have the string will be provided
const searchMovies = async (word) => {
  try {
    const movies = await Movies.find({
      title: { $regex: word, $options: "i" },
    });
    return movies;
  } catch (error) {
    throw error;
  }
};

// Function to create a new movie
const createMovie = async (movieData) => {
  try {
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
        const imageUrl = movieData ? movieData.imageUrl : null;
        return {
          movieTitle: movie._id,
          reviewCount: movie.reviewCount,
          year,
          imageUrl,
        };
      })
    );

    return moviesWithYear;
  } catch (error) {
    throw new Error("Error fetching top reviewed movies: " + error.message);
  }
}

module.exports = {
  getAllMovies,
  searchMovies,
  createMovie,
  deleteMovie,
  getTopReviewedMovies,
  getMovieByTitle,
};
