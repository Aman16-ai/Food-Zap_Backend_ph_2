const speakeasy = require("speakeasy");

const generateOTP = () => {
  const sceret = speakeasy.generateSecret();
  const otp = speakeasy.totp({
    sceret: sceret.base32,
    encoding: "base32",
  });
  console.log("otp is ", otp);
  return otp;
};


module.exports = generateOTP
