//======> Model imports <=======
const Users = require("../models/userModel");

//hash password before saving to database
const bcrypt = require("bcrypt");

//for jwt authentication
const jwt = require("jsonwebtoken");

//function to create a new user
const createUser = async (userData) => {
  try {
    //email is unique or not?
    const existingEmail = await Users.findOne({ email: userData.email });
    if (existingEmail) {
      throw new Error("Email already exists");
    }

    //userName is unique or not?
    const existingUserName = await Users.findOne({
      userName: userData.userName,
    });

    if (existingUserName) {
      throw new Error("Username already exists");
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);

    //save user to datavase
    const newUser = new Users({
      name: userData.name,
      userName: userData.userName,
      email: userData.email,
      password: hashedPassword,
    });
    return await newUser.save();
  } catch (error) {
    throw error;
  }
};

//function to authenticate user
const authenticateUser = async (email, password) => {
  try {
    //find if user exists with the provided email
    const user = await Users.findOne({ email });

    if (!user) {
      throw new Error("User not found");
    }

    //check if password matches
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (isPasswordMatch) {
      const token = jwt.sign(
        { userName: user.userName },
        process.env.SECRET_KEY,
        { expiresIn: "24h" }
      );

      return {
        token,
        userName: user.userName,
        email: user.email,
      };
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
