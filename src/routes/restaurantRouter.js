const { createRestaurant, getAllRestaurant, getRestaurantCategoriesCount, getRestaurantById } = require("../controllers/Restaurant")
const { verifyResturantOwnerTokenMiddleware } = require("../middleware/auth")
const uploads = require("../middleware/uploadMediaMiddlware")


const restaurantRouter = (app) => {
    app.route('/restaurant').post(verifyResturantOwnerTokenMiddleware,uploads.single('img'),createRestaurant)
    .get(getAllRestaurant)

    app
    .route("/restaurant/:restaurantId/categoryCount")
    .get(getRestaurantCategoriesCount)

    app
    .route("/restaurant/:restaurantId")
    .get(getRestaurantById)

}

module.exports = restaurantRouter