import { suite, test, expect } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SearchMovieCard from "@components/ui/searchMovieCard/MovieCard";

suite("SearchMovieCard component", () => {
  test("renders movie card correctly", () => {
    const movie = {
      title: "Test Movie",
      year: "2022",
      imageUrl: "test-image-url",
      description: "This is a test movie description.",
    };

    const { getByText, getByAltText } = render(
      <MemoryRouter>
        <SearchMovieCard
          movie={movie}
          imageIndex={0}
          setSearchResultsOpen={() => {}}
        />
      </MemoryRouter>
    );

    expect(getByText("Test Movie")).not.toBeNull();
    expect(getByText("2022")).not.toBeNull();
    expect(getByText("This is a test movie description.")).not.toBeNull();

    const movieImage = getByAltText("Test Movie");
    expect(movieImage).not.toBeNull();
    expect(movieImage).toHaveAttribute("src", "test-image-url");
  });
});
