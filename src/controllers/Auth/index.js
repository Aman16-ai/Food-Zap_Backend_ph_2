const User = require("../../models/User/User")
const Otp = require("../../models/User/Otp")
const sendMessage = require("../../utils/smsUtil")
const generateOTP = require("../../utils/otpUtil")
const jwt = require("jsonwebtoken")
const ErrorProvider = require("../../Error/ErrorProvider")


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
            const result = await sendMessage(phoneNo,`${otp} is the OTP for FoodZap app verification`)
            return res.status(200).json({status:true,Response:{user:user_obj,otp:otp}})
        }

        const otp = generateOTP()
        const otp_obj = await Otp.create({userId:user._id,otp:otp})
        sendMessage(phoneNo,`${otp} is the OTP for FoodZap app verification`)
        return res.status(200).json({status:true,Response:{user,otp}})


    }
    catch(err) {
        next(err)
    }
}

const verifyOtp = async(req,res,next) => {
    try {
        const {userId,otp} = req.body
        const otp_obj = await Otp.findOne({userId:userId,otp:otp})
        if(!otp_obj) {
            console.log("running this line")
           throw new ErrorProvider(404,false,"Otp not found")
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
        next(err)
    }
}

module.exports = {handleAuthentication,verifyOtp}