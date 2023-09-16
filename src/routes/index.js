const userRouter = require("./UserRouter")

const rootRouter = (app) => {
    userRouter(app)
}


module.exports = rootRouter