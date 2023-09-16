const mongoose = require("mongoose")

const OtpSchema = new mongoose.Schema({
    userId :{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    otp : {
        type:Number
    }
},{timestamps:true})

module.exports = mongoose.model("Otp",OtpSchema)

