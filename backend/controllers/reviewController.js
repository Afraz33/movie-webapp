const reviewService = require("../services/reviewService");

// Get all reviews for a movie
const getAllReviewsForMovie = async (req, res) => {
  try {
    const { movieTitle } = req.params;
    const reviews = await reviewService.getAllReviewsForMovie(movieTitle);
    if (!reviews) {
      return res
        .status(404)
        .json({ message: "No reviews found for this movie" });
    }
    res.json(reviews);
  } catch (error) {
    console.error("Error getting reviews for movie:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get all reviews for a user for a particular movie
const getAllReviewsForUserForMovie = async (req, res) => {
  try {
    const { userName, movieTitle } = req.params;
    const reviews = await reviewService.getAllReviewsForUserForMovie(
      userName,
      movieTitle
    );
    if (!reviews) {
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
    const reviews = await reviewService.getAllReviewsForUser(userName);
    if (!reviews) {
      return res
        .status(404)
        .json({ message: "No reviews found for this user for any movie" });
    }
    res.json(reviews);
  } catch (error) {
    console.error("Error getting reviews for user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Update review
const updateReview = async (req, res) => {
  try {
    const { reviewId } = req.params;
    const { reviewText } = req.body;
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
    const deletedReview = await reviewService.deleteReview(reviewId);
    res.json(deletedReview);
  } catch (error) {
    console.error("Error deleting review:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//add a review
const addReview = async (req, res) => {
  try {
    const reviewData = req.body;
    const newReview = await reviewService.addReview(reviewData);
    res.status(201).json(newReview);
  } catch (error) {
    console.error("Error adding review:", error);
    res.status(500).json({ message: "Internal Server Error" });
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
