const ErrorProvider = require("../../Error/ErrorProvider");
const User = require("../../models/User/User");

const getUser = async (req, res, next) => {
  try {
    const user = req.user;
    return res.status(200).json({ status: true, Response: user });
  } catch (err) {
    next(err);
  }
};

const onBoardedUser = async (req, res, next) => {
  try {
    const user = req.user;
    if (!user) {
      throw new ErrorProvider(404, false, "User not found");
    }
    const firstname = req.body.firstName;
    const lastname = req.body.lastName;
    const email = req.body.email;

    if (!firstname || !lastname || !email) {
      throw new ErrorProvider(404, false, "Required details not found");
    }
    const obj = await User.findByIdAndUpdate(
      user._id,
      { ...req.body, onBoarded: true },
      { new: true }
    );
    return res.status(200).json({
      status: true,
      Response: { user: obj, message: "successfully onboarded" },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { getUser, onBoardedUser };
