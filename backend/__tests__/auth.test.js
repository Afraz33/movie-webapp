// authService.test.js

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authService = require("../services/authService");
const Users = require("../models/userModel");
const request = require("supertest");
const app = require("../app");

jest.mock("bcrypt");
jest.mock("jsonwebtoken");
jest.mock("../models/userModel");

describe("Authentication Service", () => {
  describe("createUser", () => {
    it("should create a new user", async () => {
      const userData = {
        name: "Test User",
        userName: "testuser",
        email: "test@example.com",
        password: "password123",
      };

      const newUser = { ...userData, _id: "user_id" };
      Users.findOne.mockResolvedValue(null);
      bcrypt.hash.mockResolvedValue("hashedPassword");
      Users.prototype.save.mockResolvedValue(newUser);

      const result = await authService.createUser(userData);

      expect(result).toEqual(newUser);
    });

    it("should throw an error if email already exists", async () => {
      Users.findOne.mockResolvedValue(true);

      await expect(
        authService.createUser({ email: "test@example.com" })
      ).rejects.toThrow("Email already exists");
    });
  });

  describe("authenticateUser", () => {
    it("should authenticate a user", async () => {
      const user = {
        userName: "testuser",
        email: "test@example.com",
        password: "hashedPassword",
      };
      Users.findOne.mockResolvedValue(user);
      bcrypt.compare.mockResolvedValue(true);
      jwt.sign.mockReturnValue("token");

      const result = await authService.authenticateUser(
        "test@example.com",
        "password123"
      );

      expect(result).toEqual({
        token: "token",
        userName: "testuser",
        email: "test@example.com",
      });
    });

    it("should throw an error if user not found", async () => {
      Users.findOne.mockResolvedValue(null);

      await expect(
        authService.authenticateUser("test@example.com", "password123")
      ).rejects.toThrow("User not found");
    });
  });
});

describe("Authentication Controller", () => {
  describe("POST /auth/signup", () => {
    it("should create a new user", async () => {
      const userData = {
        name: "Test User",
        userName: "testuser",
        email: "test@example.com",
        password: "password123",
      };

      const response = await request(app).post("/auth/signup").send(userData);

      expect(response.status).toBe(201);
      expect(response.body.message).toBe("User successfully created");
      expect(response.body.user).toMatchObject(userData);
    });
  });
});
