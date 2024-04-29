const {
  getAllReviewsForMovie,
  getAllReviewsForUser,
  getAllReviewsForUserForMovie,
  updateReview,
  deleteReview,
  addReview,
} = require("../controllers/reviewController");

const reviewRoutes = require("express").Router();

// Review routes
reviewRoutes.post("/addReview", addReview);
reviewRoutes.delete("/deleteReview/:reviewId", deleteReview);
reviewRoutes.get("/movieReviews/:movieTitle", getAllReviewsForMovie);

reviewRoutes.get(
  "/reviews/:movieTitle/:userName",
  getAllReviewsForUserForMovie
);

reviewRoutes.get("/userReviews/:userName", getAllReviewsForUser);
reviewRoutes.put("/updateReview/:reviewId", updateReview);

module.exports = reviewRoutes;
