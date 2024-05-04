import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import SignUpForm from "../../components/ui/SignupForm/SignupForm";

describe("SignUpForm", () => {
  it("renders without crashing", () => {
    render(<SignUpForm />, { wrapper: MemoryRouter });
  });

  it("submits the form with correct data", async () => {
    const mockResponse = {
      user: {
        id: 1,
        userName: "testuser",
        name: "Test User",
        email: "test@example.com",
      },
    };
    global.fetch = jest.fn().mockResolvedValue({ json: () => mockResponse });

    const { getByLabelText, getByText } = render(<SignUpForm />, {
      wrapper: MemoryRouter,
    });

    fireEvent.change(getByLabelText("Username"), {
      target: { value: "testuser" },
    });
    fireEvent.change(getByLabelText("Name"), {
      target: { value: "Test User" },
    });
    fireEvent.change(getByLabelText("Email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(getByLabelText("Password"), {
      target: { value: "password123" },
    });

    fireEvent.submit(getByText("Sign Up"));

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        "http://localhost:8000/auth/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userName: "testuser",
            name: "Test User",
            email: "test@example.com",
            password: "password123",
          }),
        }
      );
    });

    expect(getByText("Signup Successful")).toBeInTheDocument();
  });

  it("displays error message when signup fails", async () => {
    const mockResponse = { error: "Username already exists" };
    global.fetch = jest.fn().mockResolvedValue({ json: () => mockResponse });

    const { getByLabelText, getByText } = render(<SignUpForm />, {
      wrapper: MemoryRouter,
    });

    fireEvent.change(getByLabelText("Username"), {
      target: { value: "existinguser" },
    });
    fireEvent.submit(getByText("Sign Up"));

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        "http://localhost:8000/auth/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userName: "existinguser",
            name: "",
            email: "",
            password: "",
          }),
        }
      );
    });

    expect(getByText("Username already exists")).toBeInTheDocument();
  });
});
