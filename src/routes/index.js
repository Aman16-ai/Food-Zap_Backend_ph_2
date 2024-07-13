const userRouter = require("./UserRouter")
const categoryRouter = require("./categoryRouter")
const foodRoute = require("./foodRoute")
const restaurantRouter = require("./restaurantRouter")

const rootRouter = (app) => {
    userRouter(app)
    restaurantRouter(app)
    categoryRouter(app)
    foodRoute(app)
}


module.exports = rootRouter