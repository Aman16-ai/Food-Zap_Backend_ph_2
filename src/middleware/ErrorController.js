

const ErrorController = (err,req,res,next) => {
    console.log("running error controller")
    console.log(err.name)
}

module.exports = ErrorController