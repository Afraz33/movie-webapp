import { render, screen } from "@testing-library/react";
import { ApplicationForm } from "./ApplicationForm";

test("render correctly", () => {
  render(<ApplicationForm />);

  const nameInputElement = screen.getByLabelText("name");
  expect(nameInputElement).toBeInTheDocument();
});

test("render correctly", () => {
  render(<ApplicationForm />);

  const titleElement = screen.getByRole("heading");
  expect(titleElement).toBeInTheDocument();
});
