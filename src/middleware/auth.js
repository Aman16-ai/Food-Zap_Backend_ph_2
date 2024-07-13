const jwt = require("jsonwebtoken");
const User = require("../models/User/User");
const ErrorProvider = require("../Error/ErrorProvider");

const checkToken = (bearer) => {
  const token = bearer.split(" ")[1];
  if (!token) {
    throw new ErrorProvider(401, false, "Token invalid");
  }
  return token;
};
const verifyAndFetchUser = async (token) => {
  const data = jwt.verify(token, process.env.JWT_SECERT);
  console.log(data);
  const user = await User.findOne({ _id: data.user.id });
  if (!user) {
    throw new ErrorProvider(404, false, "User not found");
  }
  return user;
};
const verifyTokenMiddleware = async (req, res, next) => {
  try {
    const bearer = req.headers.authorization;
    const token = checkToken(bearer);
    const user = await verifyAndFetchUser(token);
    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};

const verifyResturantOwnerTokenMiddleware = async (req, res, next) => {
  try {
    const bearer = req.headers.authorization;
    const token = checkToken(bearer);
    const user = await verifyAndFetchUser(token);
    if (user.user_type === "restaurant_owner") {
      req.user = user;
      next();
    }
    else {
      throw new ErrorProvider(404,false,"Valid user not found")
    }
  } catch (err) {
    next(err);
  }
};
module.exports = {verifyTokenMiddleware,verifyResturantOwnerTokenMiddleware};
