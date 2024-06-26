const authService = require("../services/authService");

//siging up as a new user
const signup = async (req, res) => {
  try {
    const { name, userName, email, password } = req.body;

    // Validations for all properties on data such as not null
    //password limit
    if (!name || !userName || !email || !password) {
      throw new Error("Missing required fields");
    }
    //password lenght ===6 or not?
    if (password.length < 6) {
      throw new Error("Password must be at least 6 characters long");
    }
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
    if (!email || !password) {
      throw new Error("Missing required fields");
    }
    if (password.length < 6) {
      throw new Error("Password must be at least 6 characters long");
    }

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
