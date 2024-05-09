// movieService.test.js

const movieService = require("../services/movieService");
const Movies = require("../models/movieModel");

jest.mock("../models/movieModel");

describe("Movie Service", () => {
  describe("searchMovies", () => {
    it("should search movies by string", async () => {
      const mockMovies = [{ title: "Avengers" }];
      Movies.find.mockResolvedValue(mockMovies);

      const result = await movieService.searchMovies("Avengers");

      expect(result).toEqual([{ title: "Avengers" }]);
    });

    it("should return an empty array if no matching movies found", async () => {
      Movies.find.mockResolvedValue([]);

      const result = await movieService.searchMovies("Superman");

      expect(result).toEqual([]);
    });
  });

  describe("deleteMovie", () => {
    it("should delete a movie", async () => {
      const deletedMovie = { title: "Deleted Movie" };
      Movies.findOneAndDelete.mockResolvedValue(deletedMovie);

      const result = await movieService.deleteMovie("Deleted Movie");

      expect(result).toEqual(deletedMovie);
    });

    it("should throw an error if movie not found", async () => {
      Movies.findOneAndDelete.mockResolvedValue(null);

      await expect(
        movieService.deleteMovie("Nonexistent Movie")
      ).rejects.toThrow("Error deleating movie");
    });
  });

  describe("getMovieByTitle", () => {
    it("should fetch movie by title", async () => {
      const mockMovie = { title: "Movie 1" };
      Movies.findOne.mockResolvedValue(mockMovie);

      const result = await movieService.getMovieByTitle("Movie 1");

      expect(result).toEqual(mockMovie);
    });

    it("should return null if movie not found", async () => {
      Movies.findOne.mockResolvedValue(null);

      const result = await movieService.getMovieByTitle("Nonexistent Movie");

      expect(result).toBeNull();
    });
  });
});
