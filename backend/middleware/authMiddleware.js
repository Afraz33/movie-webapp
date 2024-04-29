const verifyUser = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      throw new Error("token not provided");
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;

    next();
  } catch (error) {
    console.error("Error verifying user:", error);
    res.status(401).json({ message: "Unauthorized", error: error.message });
  }
};

module.exports = { verifyUser };
