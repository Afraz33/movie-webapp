import { suite, test, expect } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import MovieReviews from "@components/ui/movieReviews/MovieReviews";
import { MemoryRouter } from "react-router-dom";

suite("MovieReviews component", () => {
  test("renders review correctly", () => {
    const review = {
      userName: "testuser",
      reviewText: "Great movie!",
      reviewId: "1",
    };

    const { getByText } = render(
      <MemoryRouter>
        <MovieReviews review={review} />
      </MemoryRouter>
    );

    expect(getByText(review.userName)).toBeInTheDocument();
    expect(getByText(review.reviewText)).toBeInTheDocument();
  });
});
