const Reviews = require("../models/reviewModel");
const uuid = require("uuid");

const generateReviewId = () => {
  return uuid.v4();
};

//createReview
const addReview = async (reviewData) => {
  if (
    !reviewData.reviewText ||
    !reviewData.movieTitle ||
    !reviewData.userName
  ) {
    throw new Error("Missing required fields");
  }
  try {
    const reviewId = generateReviewId();
    const newReview = new Reviews({
      reviewId,
      reviewText: reviewData.reviewText,
      movieTitle: reviewData.movieTitle,
      userName: reviewData.userName,
    });
    await newReview.save();
    return newReview;
  } catch (error) {
    throw error;
  }
};

// Function to fetch all reviews for a movie
const getAllReviewsForMovie = async (movieTitle) => {
  try {
    if (!movieTitle) {
      throw new Error("Movie title required");
    }

    const allReviews = await Reviews.find({ movieTitle });
    return allReviews;
  } catch (error) {
    throw error;
  }
};

// Function to fetch all reviews for a user for a particular movie
const getAllReviewsForUserForMovie = async (userName, movieTitle) => {
  try {
    if (!userName) {
      throw new Error("User name required");
    }
    if (!movieTitle) {
      throw new Error("Movie Title required");
    }

    const reviewsForUser = await Reviews.find({ userName, movieTitle });
    return reviewsForUser;
  } catch (error) {
    throw error;
  }
};

//get all user reviews for all movies
const getAllReviewsForUser = async (userName) => {
  try {
    if (!userName) {
      throw new Error("User name required");
    }

    const reviewsForUser = await Reviews.find({ userName });
    return reviewsForUser;
  } catch (error) {
    throw error;
  }
};

// Function to update a review
const updateReview = async (reviewId, updatedReview) => {
  try {
    if (!reviewId) {
      throw new Error("Review ID required");
    }

    const updatedReviewData = await Reviews.findByIdAndUpdate(
      reviewId,
      updatedReview,
      { new: true }
    );
    return updatedReviewData;
  } catch (error) {
    throw error;
  }
};

// Function to delete a review
const deleteReview = async (reviewId) => {
  try {
    if (!reviewId) {
      throw new Error("Review ID required");
    }

    const deletedReview = await Reviews.findByIdAndDelete(reviewId);
    if (!deletedReview) {
      throw new Error("Error deleting review");
    }

    return deletedReview;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  addReview,
  getAllReviewsForMovie,
  getAllReviewsForUserForMovie,
  getAllReviewsForUser,
  updateReview,
  deleteReview,
};
