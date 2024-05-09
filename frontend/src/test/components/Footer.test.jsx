import { suite, test, expect } from "vitest";
import { render } from "@testing-library/react";
import Footer from "@components/ui/footer/Footer";

suite("Footer component", () => {
  test("renders correctly", () => {
    // Render the Footer component
    const { getByText } = render(<Footer />);

    // Assert that the footer text is rendered correctly
    expect(getByText("Movie-Webapp@Cowlar")).toBeInTheDocument();
    expect(getByText("Made By Afraz")).toBeInTheDocument();
  });
});
