import { suite, test, expect } from "vitest";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginForm from "@components/ui/LoginForm/LoginForm";
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter
suite("LoginForm component", () => {
  test("renders without crashing", () => {
    const { container } = render(
      <MemoryRouter>
        {" "}
        {/* Wrap the LoginForm component with MemoryRouter */}
        <LoginForm />
      </MemoryRouter>
    );
    expect(container.firstChild).not.toBeNull();
  });

  test("updates email input value on change", () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        {" "}
        <LoginForm />
      </MemoryRouter>
    );
    const emailInput = getByLabelText("Email");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });

    expect(emailInput.value).toBe("test@example.com");
  });

  test("updates password input value on change", () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        {" "}
        <LoginForm />
      </MemoryRouter>
    );
    const passwordInput = getByLabelText("Password");

    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(passwordInput.value).toBe("password123");
  });
});
