const { JsonWebTokenError } = require("jsonwebtoken")
const ErrorProvider = require("../Error/ErrorProvider")


const ErrorController = (err,req,res,next) => {
    console.log("running error controller")
    console.log(err)

    if(err instanceof ErrorProvider) {
        console.log('running this also')
        return res.status(err.statusCode).json({"status":err.status,Error:err.message})
    }
    if(err instanceof JsonWebTokenError) {
        return res.status(401).json({"status":false,"Error":"Invalid authentication token"})
    }
    return res.status(500).json({"status":false,"Error":"Some internal server error"})
}

module.exports = ErrorController