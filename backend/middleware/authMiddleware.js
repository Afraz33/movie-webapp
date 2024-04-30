const jwt = require("jsonwebtoken");

const verifyUser = (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      throw new Error("Authorization header not provided");
    }
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      throw new Error("token not provided");
    }

    const decoded_token = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded_token;

    next();
  } catch (error) {
    console.error("Error verifying user:", error);
    res.status(401).json({ message: "Unauthorized", error: error.message });
  }
};

module.exports = { verifyUser };
