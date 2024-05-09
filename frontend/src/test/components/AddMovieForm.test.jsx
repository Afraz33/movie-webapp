import { suite, test, expect, fireEvent } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AddMovieForm from "@components/ui/addMovie/AddMovieForm";

suite("AddMovieForm component", () => {
  test("renders form fields correctly", () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <AddMovieForm />
      </MemoryRouter>
    );

    const titleInput = getByLabelText("Title");
    const descriptionInput = getByLabelText("Description");
    const imageUrlInput = getByLabelText("Image Url");
    const trailerUrlInput = getByLabelText("Trailer Url");
    const yearInput = getByLabelText("Year");

    expect(titleInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
    expect(imageUrlInput).toBeInTheDocument();
    expect(trailerUrlInput).toBeInTheDocument();
    expect(yearInput).toBeInTheDocument();
  });

  test("makes sure the data is present in form fields", () => {
    const { getByLabelText, getByText } = render(
      <MemoryRouter>
        <AddMovieForm />
      </MemoryRouter>
    );

    const titleInput = getByLabelText("Title");
    const descriptionInput = getByLabelText("Description");
    const imageUrlInput = getByLabelText("Image Url");
    const trailerUrlInput = getByLabelText("Trailer Url");
    const yearInput = getByLabelText("Year");
    const addButton = getByText("Add Movie");

    expect(titleInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
    expect(imageUrlInput).toBeInTheDocument();
    expect(trailerUrlInput).toBeInTheDocument();
    expect(yearInput).toBeInTheDocument();
  });
});
