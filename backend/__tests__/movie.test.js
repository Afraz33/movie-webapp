const {
  getAllMovies,
  searchMoviesByTitle,
  createMovie,
  deleteMovie,
  getTopReviewedMovies,
} = require("../services/movieService");
const Movies = require("../models/movieModel");
const Reviews = require("../models/reviewModel");

// Mocking the MovieModel's find, findOne, and save functions
jest.mock("../models/movieModel", () => ({
  find: jest.fn(),
  findOne: jest.fn(),
  save: jest.fn(),
  findOneAndDelete: jest.fn(),
}));

// Mocking the ReviewModel's aggregate function
jest.mock("../models/reviewModel", () => ({
  aggregate: jest.fn(),
}));

// Tests for getAllMovies function
describe("getAllMovies function", () => {
  it("should fetch all movies", async () => {
    // Mocking the returned movies
    const movies = [{ title: "Movie 1" }, { title: "Movie 2" }];
    Movies.find.mockResolvedValue(movies);

    // Call the getAllMovies function
    const result = await getAllMovies();

    // Assert that the result matches the returned movies
    expect(result).toEqual(movies);
  });

  // Add more test cases for getAllMovies function as needed
});

// Tests for searchMoviesByTitle function
describe("searchMoviesByTitle function", () => {
  it("should search movies by title", async () => {
    // Mocking the input title and the returned movie
    const title = "Movie";
    const movie = {
      title: "Movie Title",
      description: "Description",
      year: 2022,
    };
    Movies.findOne.mockResolvedValue(movie);

    // Call the searchMoviesByTitle function
    const result = await searchMoviesByTitle(title);

    // Assert that the result matches the returned movie
    expect(result).toEqual(movie);
  });

  // Add more test cases for searchMoviesByTitle function as needed
});

// Tests for createMovie function
describe("createMovie function", () => {
  it("should create a new movie", async () => {
    // Mocking the input movie data
    const movieData = {
      title: "New Movie",
      description: "Description",
      year: 2022,
    };

    // Mocking the saved movie
    const savedMovie = { ...movieData, _id: "movieId" };
    Movies.findOne.mockResolvedValue(null);
    Movies.save.mockResolvedValue(savedMovie);

    // Call the createMovie function
    const result = await createMovie(movieData);

    // Assert that the result matches the saved movie
    expect(result).toEqual(savedMovie);
  });

  // Add more test cases for createMovie function as needed
});

// Tests for deleteMovie function
describe("deleteMovie function", () => {
  it("should delete a movie", async () => {
    // Mocking the input title and the deleted movie
    const title = "Movie Title";
    const deletedMovie = {
      title: "Deleted Movie",
      description: "Description",
      year: 2021,
    };
    Movies.findOneAndDelete.mockResolvedValue(deletedMovie);

    // Call the deleteMovie function
    const result = await deleteMovie(title);

    // Assert that the result matches the deleted movie
    expect(result).toEqual(deletedMovie);
  });

  // Add more test cases for deleteMovie function as needed
});

// Tests for getTopReviewedMovies function
describe("getTopReviewedMovies function", () => {
  it("should get top reviewed movies", async () => {
    // Mocking the returned top reviewed movies and movie data
    const topReviewedMovies = [{ _id: "Movie 1" }, { _id: "Movie 2" }];
    const movieData1 = { title: "Movie 1", year: 2022 };
    const movieData2 = { title: "Movie 2", year: 2021 };
    Movies.findOne.mockImplementation((filter) => {
      if (filter.title === "Movie 1") return Promise.resolve(movieData1);
      if (filter.title === "Movie 2") return Promise.resolve(movieData2);
    });
    Reviews.aggregate.mockResolvedValue(topReviewedMovies);

    // Call the getTopReviewedMovies function
    const result = await getTopReviewedMovies();

    // Assert that the result matches the expected format
    expect(result).toEqual([
      { movieTitle: "Movie 1", reviewCount: 1, year: 2022 },
      { movieTitle: "Movie 2", reviewCount: 1, year: 2021 },
    ]);
  });

  // Add more test cases for getTopReviewedMovies function as needed
});
