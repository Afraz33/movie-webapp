import { suite, test, expect } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter
import MovieCard from "@components/ui/movieCard/MovieCard";

suite("MovieCard component", () => {
  test("renders movie card correctly", () => {
    // Mock movie data
    const movie = {
      title: "Test Movie",
      year: "2022",
      imageUrl: "test-image-url",
      reviewCount: 5,
    };

    const { getByText } = render(
      <MemoryRouter>
        <MovieCard movie={movie} imageIndex={0} />
      </MemoryRouter>
    );

    // Assert that movie title, year are rendered correctly
    expect(getByText("Test Movie")).not.toBeNull();
    expect(getByText("2022")).not.toBeNull();
  });
});
