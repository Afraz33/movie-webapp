import { suite, test, expect } from "vitest";
import { render, fireEvent, waitFor } from "@testing-library/react";
import SignUpForm from "@components/ui/SignupForm/SignupForm";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

suite("SignUpForm component", () => {
  test("renders without crashing", () => {
    const { container } = render(
      <MemoryRouter>
        <SignUpForm />
      </MemoryRouter>
    );
    expect(container.firstChild).not.toBeNull();
  });

  test("updates username input value on change", () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <SignUpForm />
      </MemoryRouter>
    );
    const usernameInput = getByLabelText("Username");

    fireEvent.change(usernameInput, { target: { value: "testuser" } });

    expect(usernameInput.value).toBe("testuser");
  });

  test("updates name input value on change", () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <SignUpForm />
      </MemoryRouter>
    );
    const nameInput = getByLabelText("Name");

    fireEvent.change(nameInput, { target: { value: "Test User" } });

    expect(nameInput.value).toBe("Test User");
  });

  test("updates email input value on change", () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <SignUpForm />
      </MemoryRouter>
    );
    const emailInput = getByLabelText("Email");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });

    expect(emailInput.value).toBe("test@example.com");
  });

  test("updates password input value on change", () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <SignUpForm />
      </MemoryRouter>
    );
    const passwordInput = getByLabelText("Password");

    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(passwordInput.value).toBe("password123");
  });
});
