// reviewService.test.js

const reviewService = require("../services/reviewService");
const Reviews = require("../models/reviewModel");
const uuid = require("uuid");

jest.mock("../models/reviewModel");
jest.mock("uuid");

describe("Review Service", () => {
  describe("getAllReviewsForMovie", () => {
    it("should fetch all reviews for a movie", async () => {
      const mockReviews = [
        { reviewText: "Great movie!" },
        { reviewText: "Awesome!" },
      ];
      Reviews.find.mockResolvedValue(mockReviews);

      const result = await reviewService.getAllReviewsForMovie("Movie 1");

      expect(result).toEqual(mockReviews);
    });

    it("should throw an error if fetching reviews fails", async () => {
      Reviews.find.mockRejectedValue(new Error("Database error"));

      await expect(
        reviewService.getAllReviewsForMovie("Movie 1")
      ).rejects.toThrow("Database error");
    });
  });

  describe("getAllReviewsForUserForMovie", () => {
    it("should fetch all reviews for a user for a particular movie", async () => {
      const mockReviews = [
        { reviewText: "Great movie!" },
        { reviewText: "Awesome!" },
      ];
      Reviews.find.mockResolvedValue(mockReviews);

      const result = await reviewService.getAllReviewsForUserForMovie(
        "user1",
        "Movie 1"
      );

      expect(result).toEqual(mockReviews);
    });

    it("should throw an error if fetching reviews fails", async () => {
      Reviews.find.mockRejectedValue(new Error("Database error"));

      await expect(
        reviewService.getAllReviewsForUserForMovie("user1", "Movie 1")
      ).rejects.toThrow("Database error");
    });
  });

  describe("getAllReviewsForUser", () => {
    it("should fetch all reviews for a user", async () => {
      const mockReviews = [
        { reviewText: "Great movie!" },
        { reviewText: "Awesome!" },
      ];
      Reviews.find.mockResolvedValue(mockReviews);

      const result = await reviewService.getAllReviewsForUser("user1");

      expect(result).toEqual(mockReviews);
    });

    it("should throw an error if fetching reviews fails", async () => {
      Reviews.find.mockRejectedValue(new Error("Database error"));

      await expect(reviewService.getAllReviewsForUser("user1")).rejects.toThrow(
        "Database error"
      );
    });
  });

  describe("updateReview", () => {
    it("should update a review", async () => {
      const updatedReviewData = { reviewText: "Updated review!" };
      const mockUpdatedReview = {
        reviewText: "Updated review!",
        reviewId: "review_id",
      };
      Reviews.findOneAndUpdate.mockResolvedValue(mockUpdatedReview);

      const result = await reviewService.updateReview(
        "review_id",
        "Updated review!"
      );

      expect(result).toEqual(mockUpdatedReview);
    });

    it("should throw an error if updating review fails", async () => {
      Reviews.findOneAndUpdate.mockRejectedValue(new Error("Database error"));

      await expect(
        reviewService.updateReview("review_id", "Updated review!")
      ).rejects.toThrow("Database error");
    });
  });

  describe("deleteReview", () => {
    it("should delete a review", async () => {
      const deletedReview = {
        reviewText: "Deleted review!",
        reviewId: "review_id",
      };
      Reviews.findOneAndDelete.mockResolvedValue(deletedReview);

      const result = await reviewService.deleteReview("review_id");

      expect(result).toEqual(deletedReview);
    });

    it("should throw an error if deleting review fails", async () => {
      Reviews.findOneAndDelete.mockRejectedValue(new Error("Database error"));

      await expect(reviewService.deleteReview("review_id")).rejects.toThrow(
        "Database error"
      );
    });
  });

  describe("deleteAllReviews", () => {
    it("should delete all reviews for a movie", async () => {
      const deletedReviews = [
        { reviewText: "Deleted review 1" },
        { reviewText: "Deleted review 2" },
      ];
      Reviews.deleteMany.mockResolvedValue(deletedReviews);

      const result = await reviewService.deleteAllReviews("Movie 1");

      expect(result).toEqual(deletedReviews);
    });

    it("should throw an error if deleting reviews fails", async () => {
      Reviews.deleteMany.mockRejectedValue(new Error("Database error"));

      await expect(reviewService.deleteAllReviews("Movie 1")).rejects.toThrow(
        "Database error"
      );
    });
  });
});
