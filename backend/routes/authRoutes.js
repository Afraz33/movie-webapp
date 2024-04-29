const { signup, login } = require("../controllers/authController");

//Initializing router
const authRoutes = require("express").Router();

//auth routes
authRoutes.post("/signup", signup);
authRoutes.post("/login", login);

module.exports = authRoutes;
