import { suite, test, expect } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter
import MovieDetails from "@components/ui/movieDetails/MovieDetails";

suite("MovieDetails component", () => {
  test("renders movie details correctly", () => {
    // Mock movie data
    const movieData = {
      title: "Test Movie",
      year: "2022",
      imageUrl: "test-image-url",
      description: "This is a test movie description.",
    };

    // Render the MovieDetails component with the mocked movie data inside MemoryRouter
    const { getByText, getByAltText } = render(
      <MemoryRouter>
        <MovieDetails movieData={movieData} />
      </MemoryRouter>
    );

    expect(getByText("Test Movie")).not.toBeNull();
    expect(getByText("2022")).not.toBeNull();
    expect(getByText("This is a test movie description.")).not.toBeNull();
  });
});
