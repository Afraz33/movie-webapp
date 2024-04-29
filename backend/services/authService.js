const userModel = require("../models/userModel");

//hash password before saving to database
const bcrypt = require("bcrypt");

//for jwt authentication
const jwt = require("jsonwebtoken");

const createUser = async (userData) => {
  try {
    // Validations for all properties on data such as not null
    //password limit, and unique userName and email
    if (
      !userData.name ||
      !userData.userName ||
      !userData.email ||
      !userData.password
    ) {
      throw new Error("Missing required fields");
    }
    //password lenght ===6 or not?
    if (userData.password.length < 6) {
      throw new Error("Password must be at least 6 characters long");
    }

    //email is unique or not?
    const existingEmail = await userModel.findOne({ email: userData.email });
    if (existingEmail) {
      throw new Error("Email already exists");
    }

    //userName is unique or not?
    const existingUserName = await userModel.findOne({
      userName: userData.userName,
    });
    if (existingUserName) {
      throw new Error("Username already exists");
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);

    //save user to datavase
    const user = new userModel({
      name: userData.name,
      userName: userData.userName,
      email: userData.email,
      password: hashedPassword,
    });

    return newUser;
  } catch (error) {
    throw error;
  }
};

const authenticateUser = async (email, password) => {
  try {
    //find if user exists with the provided email
    const user = await userModel.findOne({ email });

    if (!user) {
      throw new Error("User not found");
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (isPasswordMatch) {
      const token = jwt.sign(
        { userName: user.userName },
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
      );

      return { token, userName: user.userName, email: user.email };
    } else {
      throw new Error("Incorrect password");
    }
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createUser,
  authenticateUser,
};
