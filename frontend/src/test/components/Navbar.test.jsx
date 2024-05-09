import { suite, test, expect, waitFor } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import Navbar from "@components/ui/navbar/Navbar";
import { MemoryRouter } from "react-router-dom";

suite("Navbar component", () => {
  test("renders logo correctly", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const logoElement = getByText("Movify");
    expect(logoElement).toBeInTheDocument();
  });

  test("searches movies when search button is clicked", async () => {
    const { getByPlaceholderText, getByAltText, getByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const searchInput = getByPlaceholderText("Search movies");
    const searchButton = getByAltText("search");

    fireEvent.change(searchInput, { target: { value: "Avengers" } });

    fireEvent.click(searchButton);
  });

  test("displays login button when user is not logged in", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const loginButton = getByText("Login");
    expect(loginButton).toBeInTheDocument();
  });

  test("displays logout button when user is logged in", () => {
    localStorage.setItem("user name", "Test User");
    const { getByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const logoutButton = getByText("Logout");
    expect(logoutButton).toBeInTheDocument();
  });
});
