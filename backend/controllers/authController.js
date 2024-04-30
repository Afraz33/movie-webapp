const authService = require("../services/authService");

//siging up as a new user
const signup = async (req, res) => {
  try {
    const { name, userName, email, password } = req.body;

    //createUser service function
    const newUser = await authService.createUser({
      name,
      userName,
      email,
      password,
    });

    res
      .status(201)
      .json({ message: "User successfully created", user: newUser });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "User not created", error: error.message });
  }
};

//log in as user
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    //get user Details
    const userDetails = await authService.authenticateUser(email, password);

    res.status(200).json({
      message: "Login successful",
      token: userDetails.token,
      userName: userDetails.userName,
      email: userDetails.email,
    });
  } catch (error) {
    if (error.message === "User not found") {
      res.status(404).json({ message: "User not found" });
    } else if (error.message === "Incorrect password") {
      res.status(401).json({ message: "Incorrect password" });
    } else {
      console.error("Error logging in:", error);
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = {
  signup,
  login,
};
