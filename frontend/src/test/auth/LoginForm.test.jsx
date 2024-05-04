// LoginForm.test.js
import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import LoginForm from "./LoginForm";

describe("LoginForm", () => {
  it("renders without crashing", () => {
    render(<LoginForm />, { wrapper: MemoryRouter });
  });

  it("submits the form with correct data", async () => {
    const mockResponse = {
      userName: "testuser",
      email: "test@example.com",
      token: "testtoken",
    };
    global.fetch = jest
      .fn()
      .mockResolvedValue({ ok: true, json: () => mockResponse });

    const { getByLabelText, getByText } = render(<LoginForm />, {
      wrapper: MemoryRouter,
    });

    fireEvent.change(getByLabelText("Email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(getByLabelText("Password"), {
      target: { value: "password123" },
    });
    fireEvent.submit(getByText("Login"));

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        "http://localhost:8000/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: "test@example.com",
            password: "password123",
          }),
        }
      );
    });

    expect(getByText("Login Successful!")).toBeInTheDocument();
    expect(localStorage.setItem).toHaveBeenCalledWith("user name", "testuser");
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "email",
      "test@example.com"
    );
    expect(localStorage.setItem).toHaveBeenCalledWith("token", "testtoken");
  });

  it("displays error message when login fails", async () => {
    const mockResponse = { status: 401 };
    global.fetch = jest.fn().mockResolvedValue({ ok: false, status: 401 });

    const { getByLabelText, getByText } = render(<LoginForm />, {
      wrapper: MemoryRouter,
    });

    fireEvent.change(getByLabelText("Email"), {
      target: { value: "invalid@example.com" },
    });
    fireEvent.change(getByLabelText("Password"), {
      target: { value: "invalidpassword" },
    });
    fireEvent.submit(getByText("Login"));

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        "http://localhost:8000/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: "invalid@example.com",
            password: "invalidpassword",
          }),
        }
      );
    });

    expect(getByText("Incorrect password")).toBeInTheDocument();
  });
});
