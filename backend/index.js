//  ===============> Importing modules for project setup  <================
const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/database");

//  ===============> Importing user routes <================
const movieRoutes = require("./routes/movieRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const authRoutes = require("./routes/authRoutes");

// Configurations
connectDB();
dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

// App Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/movies", movieRoutes);
app.use("/reviews", reviewRoutes);
app.use("/auth", authRoutes);

//Starting server
app.listen(port, () => {
  console.log(`App listening on port ${port}`.white.underline);
});
