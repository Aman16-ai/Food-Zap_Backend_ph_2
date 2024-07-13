const {handleAuthentication,verifyOtp} = require("../controllers/Auth")
const {getUser,onBoardedUser} = require("../controllers/user")
const {verifyTokenMiddleware} = require("../middleware/auth")
const userRouter = (app) => {
    app.post("/handleAuthentication",handleAuthentication)
    app.post("/verifyOtp",verifyOtp)
    app.route("/user").get(verifyTokenMiddleware,getUser)
    app.patch("/user/onBoardUser",verifyTokenMiddleware,onBoardedUser)
}

module.exports = userRouter