require("dotenv").config();

const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  try {
    let token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({
        message: "Token is missing in the request headers",
      });
    }

    token = token.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    req.id = decodedToken.id;

    next();
  } catch (err) {
    res.status(401).json({
      message: "Invalid Token",
      error: err.message,
    });
  }
};


module.exports = verifyToken