const jwt = require("jsonwebtoken");
const User = require("../models/User/User");
const ErrorProvider = require("../Error/ErrorProvider");

const verifyTokenMiddleware = async (req, res, next) => {
  try {
    const bearer = req.headers.authorization;
    const token = bearer.split(" ")[1];
    if (!token) {
      throw new ErrorProvider(401,false,"Token invalid")
    }

    const data = jwt.verify(token, process.env.JWT_SECERT);
    console.log(data);
    const user = await User.findOne({ _id: data.user.id });
    if(!user) {
      throw new ErrorProvider(404,false,"User not found")
    }
    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = verifyTokenMiddleware;
