const User = require("../../models/User/User")
const Otp = require("../../models/User/Otp")
const sendMessage = require("../../utils/smsUtil")
const generateOTP = require("../../utils/otpUtil")
const jwt = require("jsonwebtoken")


/*

Approch:  if user found with given phoneNo then login user --> generate, send and verify otp
          else user not found with given phoneNo then create new user ---> generate,send and verify otp

*/
const handleAuthentication = async(req,res,next) => {
    console.log('Running handle Auth api')
    try {
        const phoneNo = req.body.phoneNo
        const user = await User.findOne({phoneNo:phoneNo})
        if(!user) {
            // user not found with given number hence register new user
            const user_obj = await User.create({phoneNo:phoneNo})
            const otp = generateOTP()
            console.log('otp------->',otp)
            const otp_obj = await Otp.create({userId:user_obj._id,otp:otp})
            sendMessage(phoneNo,`${otp} is the OTP for FoodZap app verification`)
            return res.status(200).json({status:true,Response:user_obj})
        }

        const otp = generateOTP()
        const otp_obj = await Otp.create({userId:user._id,otp:otp})
        sendMessage(phoneNo,`${otp} is the OTP for FoodZap app verification`)
        return res.status(200).json({status:true,Response:user})


    }
    catch(err) {
        return res.status(500).json({status:false,Response:"Some internal server error"})
    }
}

const verifyOtp = async(req,res) => {
    try {
        const {userId,otp} = req.body
        const otp_obj = await Otp.findOne({userId:userId,otp:otp})
        if(!otp_obj) {
            return res.status(404).json({status:false,Response:"Failed to verify the otp"})
        }
        const data = {
            user : {
                id : otp_obj.userId
            }
        }
        const token = jwt.sign(data,process.env.JWT_SECERT)
        return res.status(200).json({status:true,Response:{token:token}})
    }
    catch(err) {
        return res.status(500).json({status:false,Response:"Some internal server error"})
    }
}

module.exports = {handleAuthentication,verifyOtp}