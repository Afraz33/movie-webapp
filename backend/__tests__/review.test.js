const {
  addReview,
  getAllReviewsForMovie,
  getAllReviewsForUserForMovie,
  getAllReviewsForUser,
  updateReview,
  deleteReview,
} = require("../services/reviewService");
const Reviews = require("../models/reviewModel");

// Mocking the ReviewModel's find, findOne, save, findOneAndUpdate, and findOneAndDelete functions
jest.mock("../models/reviewModel", () => ({
  find: jest.fn(),
  findOne: jest.fn(),
  save: jest.fn(),
  findOneAndUpdate: jest.fn(),
  findOneAndDelete: jest.fn(),
}));

// Tests for addReview function
describe("addReview function", () => {
  it("should add a new review", async () => {
    // Mocking the input review data
    const reviewData = {
      reviewText: "Great movie!",
      movieTitle: "Movie Title",
      userName: "User Name",
    };

    // Mocking the saved review
    const savedReview = { ...reviewData, reviewId: "reviewId" };
    Reviews.save.mockResolvedValue(savedReview);

    // Call the addReview function
    const result = await addReview(reviewData);

    // Assert that the result matches the saved review
    expect(result).toEqual(savedReview);
  });

  // Add more test cases for addReview function as needed
});

// Tests for getAllReviewsForMovie function
describe("getAllReviewsForMovie function", () => {
  it("should fetch all reviews for a movie", async () => {
    // Mocking the input movie title and the returned reviews
    const movieTitle = "Movie Title";
    const reviews = [
      { reviewText: "Great movie!" },
      { reviewText: "Awesome!" },
    ];
    Reviews.find.mockResolvedValue(reviews);

    // Call the getAllReviewsForMovie function
    const result = await getAllReviewsForMovie(movieTitle);

    // Assert that the result matches the returned reviews
    expect(result).toEqual(reviews);
  });

  // Add more test cases for getAllReviewsForMovie function as needed
});

// Tests for getAllReviewsForUserForMovie function
describe("getAllReviewsForUserForMovie function", () => {
  it("should fetch all reviews for a user for a movie", async () => {
    // Mocking the input user name, movie title, and the returned reviews
    const userName = "User Name";
    const movieTitle = "Movie Title";
    const reviews = [
      { reviewText: "Great movie!" },
      { reviewText: "Awesome!" },
    ];
    Reviews.find.mockResolvedValue(reviews);

    // Call the getAllReviewsForUserForMovie function
    const result = await getAllReviewsForUserForMovie(userName, movieTitle);

    // Assert that the result matches the returned reviews
    expect(result).toEqual(reviews);
  });

  // Add more test cases for getAllReviewsForUserForMovie function as needed
});

// Tests for getAllReviewsForUser function
describe("getAllReviewsForUser function", () => {
  it("should fetch all reviews for a user", async () => {
    // Mocking the input user name and the returned reviews
    const userName = "User Name";
    const reviews = [
      { reviewText: "Great movie!" },
      { reviewText: "Awesome!" },
    ];
    Reviews.find.mockResolvedValue(reviews);

    // Call the getAllReviewsForUser function
    const result = await getAllReviewsForUser(userName);

    // Assert that the result matches the returned reviews
    expect(result).toEqual(reviews);
  });

  // Add more test cases for getAllReviewsForUser function as needed
});

// Tests for updateReview function
describe("updateReview function", () => {
  it("should update a review", async () => {
    // Mocking the input review ID, updated review text, and the updated review
    const reviewId = "reviewId";
    const updatedReviewText = "Updated review text";
    const updatedReview = { reviewId, reviewText: updatedReviewText };
    Reviews.findOneAndUpdate.mockResolvedValue(updatedReview);

    // Call the updateReview function
    const result = await updateReview(reviewId, updatedReviewText);

    // Assert that the result matches the updated review
    expect(result).toEqual(updatedReview);
  });

  // Add more test cases for updateReview function as needed
});

// Tests for deleteReview function
describe("deleteReview function", () => {
  it("should delete a review", async () => {
    // Mocking the input review ID and the deleted review
    const reviewId = "reviewId";
    const deletedReview = { reviewId, reviewText: "Deleted review" };
    Reviews.findOneAndDelete.mockResolvedValue(deletedReview);

    // Call the deleteReview function
    const result = await deleteReview(reviewId);

    // Assert that the result matches the deleted review
    expect(result).toEqual(deletedReview);
  });

  // Add more test cases for deleteReview function as needed
});
