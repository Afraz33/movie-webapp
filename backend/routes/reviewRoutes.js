const {
  getAllReviewsForMovie,
  getAllReviewsForUser,
  getAllReviewsForUserForMovie,
  updateReview,
  deleteReview,
  addReview,
} = require("../controllers/reviewController");

const { verifyUser } = require("../middleware/authMiddleware");

//Initializing router
const reviewRoutes = require("express").Router();

//Review routes
reviewRoutes.post("/addReview", verifyUser, addReview);
reviewRoutes.delete("/deleteReview/:reviewId", verifyUser, deleteReview);
reviewRoutes.get(
  "/movieReviews/:movieTitle",
  verifyUser,
  getAllReviewsForMovie
);

reviewRoutes.get(
  "/reviews/:movieTitle/:userName",
  verifyUser,
  getAllReviewsForUserForMovie
);

reviewRoutes.get("/userReviews/:userName", verifyUser, getAllReviewsForUser);
reviewRoutes.put("/updateReview/:reviewId", verifyUser, updateReview);

module.exports = reviewRoutes;
