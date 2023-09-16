const jwt = require("jsonwebtoken");
const User = require("../models/User/User");
const ErrorProvider = require("../Error/ErrorProvider");

const verifyTokenMiddleware = async (req, res, next) => {
  try {
    const bearer = req.headers.authorization;
    const token = bearer.split(" ")[1];
    if (!token) {
      return res
        .status(500)
        .json({ status: false, Response: "Token is not valid" });
    }

    const data = jwt.verify(token, process.env.JWT_SECERT);
    console.log(data);
    const user = await User.findOne({ _id: data.user.id });
    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = verifyTokenMiddleware;
