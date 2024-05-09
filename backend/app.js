//  ===============> Importing modules for project setup  <================
const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const cors = require("cors");

//  ===============> Importing user routes <================
const movieRoutes = require("./routes/movieRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const authRoutes = require("./routes/authRoutes");

// Configurations
dotenv.config();
const app = express();

// App Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/movies", movieRoutes);
app.use("/reviews", reviewRoutes);
app.use("/auth", authRoutes);

module.exports = app;
