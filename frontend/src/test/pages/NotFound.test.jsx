import { suite, test, expect } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import PageNotFound from "@pages/PageNotFound";
import { MemoryRouter } from "react-router-dom";

suite("PageNotFound component", () => {
  test("renders without crashing", () => {
    const { container } = render(
      <MemoryRouter>
        <PageNotFound />
      </MemoryRouter>
    );
    expect(container.firstChild).not.toBeNull();
  });

  test("displays page not found message", () => {
    const { getByText } = render(
      <MemoryRouter>
        <PageNotFound />
      </MemoryRouter>
    );
    const errorMessage = getByText(/Oops! Page not found/i);
    expect(errorMessage).toBeInTheDocument();
  });
});
