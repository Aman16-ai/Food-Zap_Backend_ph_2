const ErrorProvider = require("../../Error/ErrorProvider")
const User = require("../../models/User/User")

const getUser = async(req,res,next) => {
    try {
        const user = req.user
        return res.status(200).json({status:true,Response:user})
    }
    catch(err) {
        return res.status(500).json({status:false,Response:"Some internal server error"})
        // next(err)
    }
}

module.exports = getUser