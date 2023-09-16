const {handleAuthentication,verifyOtp} = require("../controllers/Auth")
const getUser = require("../controllers/user")
const verifyTokenMiddleware = require("../middleware/auth")
const userRouter = (app) => {
    app.post("/handleAuthentication",handleAuthentication)
    app.post("/verifyOtp",verifyOtp)
    app.get("/user",verifyTokenMiddleware,getUser)
}

module.exports = userRouter