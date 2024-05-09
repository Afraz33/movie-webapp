import { suite, test, expect } from "vitest";
import { render } from "@testing-library/react";
import MovieVideo from "@components/ui/movieVideo/MovieVideo";
suite("MovieVideo component", () => {
  test("renders iframe with correct src", () => {
    const trailerUrl = "https://www.youtube.com/embed/abcd1234";
    const { getByTitle } = render(<MovieVideo trailerUrl={trailerUrl} />);
    const iframeElement = getByTitle("Movie Trailer");
    expect(iframeElement).toBeInTheDocument();
    expect(iframeElement).toHaveAttribute("src", trailerUrl);
  });
});
