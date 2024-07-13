const { createRestaurant, getAllRestaurant } = require("../controllers/Restaurant")
const { verifyResturantOwnerTokenMiddleware } = require("../middleware/auth")
const uploads = require("../middleware/uploadMediaMiddlware")


const restaurantRouter = (app) => {
    app.route('/restaurant').post(verifyResturantOwnerTokenMiddleware,uploads.single('img'),createRestaurant)
    .get(getAllRestaurant)

}

module.exports = restaurantRouter