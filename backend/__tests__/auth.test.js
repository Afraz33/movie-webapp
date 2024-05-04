const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { createUser, authenticateUser } = require("../services/authService");
const Users = require("../models/userModel");

// Mocking the UserModel's findOne and save functions
jest.mock("../models/userModel", () => ({
  findOne: jest.fn(),
}));

// Mocking bcrypt's hash and compare functions
jest.mock("bcrypt", () => ({
  hash: jest.fn(),
  compare: jest.fn(),
}));

// Mocking jwt's sign function
jest.mock("jsonwebtoken", () => ({
  sign: jest.fn(),
}));

// Tests for createUser function
describe("createUser function", () => {
  it("should create a new user and return the user object", async () => {
    // Mocking the input user data
    const userData = {
      name: "John Doe",
      userName: "johndoe",
      email: "john@example.com",
      password: "password123",
    };

    // Mocking the returned user object from findOne function (no existing user with the same email or username)
    Users.findOne.mockResolvedValue(null);

    // Mocking the hashed password
    bcrypt.hash.mockResolvedValue("hashedPassword");

    // Mocking the saved user object
    const savedUser = {
      name: "John Doe",
      userName: "johndoe",
      email: "john@example.com",
      password: "hashedPassword",
    };
    Users.save.mockResolvedValue(savedUser);

    // Call the createUser function
    const result = await createUser(userData);

    // Assert that the result matches the saved user object
    expect(result).toEqual(savedUser);
  });

  // Add more test cases for createUser function as needed
});

// Tests for authenticateUser function
describe("authenticateUser function", () => {
  it("should authenticate a user and return a token and user information", async () => {
    // Mocking the input email and password
    const email = "john@example.com";
    const password = "password123";

    const user = {
      userName: "johndoe",
      email: "john@example.com",
      password: "hashedPassword",
    };
    Users.findOne.mockResolvedValue(user);

    // Mocking the password comparison
    bcrypt.compare.mockResolvedValue(true);

    jwt.sign.mockReturnValue("mockedToken");

    const result = await authenticateUser(email, password);

    expect(result).toEqual({
      token: "mockedToken",
      userName: "johndoe",
      email: "john@example.com",
    });
  });
});
