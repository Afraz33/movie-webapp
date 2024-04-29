const mongoose = require("mongoose");

//Schema for a movie
const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
});

const Movies = mongoose.model("movies", movieSchema);

module.exports = Movies;
