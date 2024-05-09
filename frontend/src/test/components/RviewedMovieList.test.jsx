import { suite, test, expect } from "vitest";
import { render } from "@testing-library/react";
import ReviewedMovieList from "@components/ui/reviewdMovieList/MovieList";

suite("ReviewedMovieList component", () => {
  test("renders most reviewed movies correctly", () => {
    // Mock top reviewed movies data
    const topReviewedMovies = [
      {
        movieTitle: "Movie 1",
        year: "2021",
        imageUrl: "movie1-image-url",
        reviewCount: 10,
      },
      {
        movieTitle: "Movie 2",
        year: "2020",
        imageUrl: "movie2-image-url",
        reviewCount: 8,
      },
    ];

    const { getByText } = render(
      <ReviewedMovieList topReviewedMovies={topReviewedMovies} />
    );

    expect(getByText("Most Reviewed")).not.toBeNull();
  });

  test("displays 'No Movies for reviews' message when there are no movies", () => {
    const topReviewedMovies = [];

    const { getByText } = render(
      <ReviewedMovieList topReviewedMovies={topReviewedMovies} />
    );

    expect(getByText("No Movies for reviews")).not.toBeNull();
  });
});
