// MovieCard.test.js
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";
import MovieCard from "./MovieCard";

const mockMovie = {
  title: "Test Movie",
  year: "2022",
};

describe("MovieCard", () => {
  it("renders without crashing", () => {
    render(
      <Router>
        <MovieCard movie={mockMovie} imageIndex={0} />
      </Router>
    );
  });

  it("displays movie title and year", () => {
    const { getByText } = render(
      <Router>
        <MovieCard movie={mockMovie} imageIndex={0} />
      </Router>
    );

    expect(getByText("Test Movie")).toBeInTheDocument();
    expect(getByText("2022")).toBeInTheDocument();
  });

  it("handles click event", () => {
    const navigateMock = jest.fn();
    const { getByText } = render(
      <Router>
        <MovieCard movie={mockMovie} imageIndex={0} />
      </Router>
    );

    fireEvent.click(getByText("Test Movie"));

    expect(localStorage.setItem).toHaveBeenCalledWith("imageIndex", 0);

    expect(navigateMock).toHaveBeenCalledWith("/movie/Test%20Movie");
  });
});
