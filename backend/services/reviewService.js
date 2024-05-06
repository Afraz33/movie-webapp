//======> Model imports <=======
const Reviews = require("../models/reviewModel");

//Library to generate a unique id
const uuid = require("uuid");

const generateReviewId = () => {
  return uuid.v4();
};

//createReview
const addReview = async (reviewData) => {
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
    const allReviews = await Reviews.find({ movieTitle });
    return allReviews;
  } catch (error) {
    throw error;
  }
};

// Function to fetch all reviews for a user for a particular movie
const getAllReviewsForUserForMovie = async (userName, movieTitle) => {
  try {
    const reviewsForUser = await Reviews.find({ userName, movieTitle });
    return reviewsForUser;
  } catch (error) {
    throw error;
  }
};

//get all user reviews for all movies
const getAllReviewsForUser = async (userName) => {
  try {
    const reviewsForUser = await Reviews.find({ userName });
    return reviewsForUser;
  } catch (error) {
    throw error;
  }
};

// Function to update a review
const updateReview = async (reviewId, reviewText) => {
  try {
    const updatedReviewData = await Reviews.findOneAndUpdate(
      { reviewId: reviewId },
      { reviewText: reviewText },
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
    const deletedReview = await Reviews.findOneAndDelete({
      reviewId: reviewId,
    });
    if (!deletedReview) {
      throw new Error("Error deleting review");
    }

    return deletedReview;
  } catch (error) {
    throw error;
  }
};

//function to delete all reviews for a movie when movie is deleted
const deleteAllReviews = async (movieTitle) => {
  try {
    const deletedReviews = await Reviews.deleteMany({ movieTitle });
    if (!deletedReviews) {
      throw new Error("Error deleting reviews");
    }
    return deletedReviews;
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
  deleteAllReviews,
};
