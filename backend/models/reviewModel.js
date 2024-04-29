const mongoose = require("mongoose");

// Schema for a review
const reviewSchema = new mongoose.Schema({
  reviewId: {
    type: String,
    unique: true,
    required: true,
  },
  reviewText: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  movieTitle: {
    type: String,
    required: true,
  },
});

const Reviews = mongoose.model("reviews", reviewSchema);

module.exports = Reviews;
