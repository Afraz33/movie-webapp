const reviewService = require("../services/reviewService");
const movieService = require("../services/movieService");
// Get all reviews for a movie
const getAllReviewsForMovie = async (req, res) => {
  try {
    const { movieTitle } = req.params;

    //validation for req.params
    if (!movieTitle) {
      throw new Error("Movie title required");
    }

    //check if the movie with provided title exists?
    const existingMovie = await movieService.getMovieByTitle(movieTitle);

    if (existingMovie === null) {
      throw new Error("Movie doesnt exist");
    }
    const reviews = await reviewService.getAllReviewsForMovie(movieTitle);
    if (reviews.length === 0) {
      return res
        .status(404)
        .json({ message: "No reviews found for this movie" });
    }
    res.json(reviews);
  } catch (error) {
    console.error("Error getting reviews for movie:", error);
    res.status(500).json({ message: error.message });
  }
};

// Get all reviews for a user for a particular movie
const getAllReviewsForUserForMovie = async (req, res) => {
  try {
    const { userName, movieTitle } = req.params;

    //validation for req.params
    if (!userName) {
      throw new Error("User name required");
    }
    if (!movieTitle) {
      throw new Error("Movie Title required");
    }

    const reviews = await reviewService.getAllReviewsForUserForMovie(
      userName,
      movieTitle
    );
    if (reviews.length === 0) {
      return res
        .status(404)
        .json({ message: "No reviews found for this user for this movie" });
    }
    res.json(reviews);
  } catch (error) {
    console.error("Error getting reviews for user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//Get all reviews for a user for all movies
const getAllReviewsForUser = async (req, res) => {
  try {
    const { userName } = req.params;

    //validation for req.parms
    if (!userName) {
      throw new Error("User name required");
    }
    const reviews = await reviewService.getAllReviewsForUser(userName);
    if (!reviews) {
      return res
        .status(404)
        .json({ message: "No reviews found for this user for any movie" });
    }
    res.json(reviews);
  } catch (error) {
    console.error("Error getting reviews for user:", error);
    res.status(500).json({ message: error.message });
  }
};

// Update review
const updateReview = async (req, res) => {
  try {
    const { reviewId } = req.params;
    const { reviewText } = req.body;

    //validation for req.body and params
    if (!reviewId) {
      throw new Error("Review ID required");
    }
    if (!reviewText) {
      throw new Error("Updated Review text required");
    }

    const updatedReview = await reviewService.updateReview(
      reviewId,
      reviewText
    );
    res.json(updatedReview);
  } catch (error) {
    console.error("Error updating review:", error);
    res.status(500).json({ message: error.message });
  }
};

// Delete review
const deleteReview = async (req, res) => {
  try {
    const { reviewId } = req.params;

    //validation for params
    if (!reviewId) {
      throw new Error("Review ID required");
    }
    const deletedReview = await reviewService.deleteReview(reviewId);
    res.json(deletedReview);
  } catch (error) {
    console.error("Error deleting review:", error);
    res.status(500).json({ message: error.message });
  }
};

//add a review
const addReview = async (req, res) => {
  try {
    //validation for req.body
    const reviewData = req.body;
    if (
      !reviewData.reviewText ||
      !reviewData.movieTitle ||
      !reviewData.userName
    ) {
      throw new Error("Missing required fields");
    }

    //check if the movie with provided title exists?
    const existingMovie = await movieService.getMovieByTitle(
      reviewData.movieTitle
    );

    if (existingMovie === null) {
      throw new Error("Cannot add reviews for a movie that don't exist");
    }

    const newReview = await reviewService.addReview(reviewData);
    res.status(201).json(newReview);
  } catch (error) {
    console.error("Error adding review:", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllReviewsForMovie,
  getAllReviewsForUser,
  getAllReviewsForUserForMovie,
  updateReview,
  deleteReview,
  addReview,
};
