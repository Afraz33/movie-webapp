const mongoose = require("mongoose");

//Schema for a user
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },

  password: {
    type: String,
    required: true,
    minlength: 6,
  },
});

const User = mongoose.model("Users", userSchema);

module.exports = User;
