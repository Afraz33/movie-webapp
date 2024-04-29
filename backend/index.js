//  ===============> Importing modules for project setup  <================
const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config;
const cors = require("cors");
const connectDB = require("./config/database");

//  ===============> Importing user routes <================
const movieRoutes = require("./routes/movieRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const authRoutes = require("./routes/authRoutes");

//Connecting to the database
connectDB();

//Initializing express app
const app = express();

//Setting up port
const port = process.env.PORT || 8000;

//Middlewares for express app
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/movies", movieRoutes);
// app.use("/reviews", reviewRoutes);
app.use("/auth", authRoutes);

//Starting server
app.listen(port, () => {
  console.log(`App listening on port ${port}`.white.underline);
});
