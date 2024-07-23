const { createFood, getFood } = require("../controllers/Food");
const { verifyResturantOwnerTokenMiddleware } = require("../middleware/auth");
const uploads = require("../middleware/uploadMediaMiddlware");

module.exports = (app) => {
  app
    .route("/food/")
    .post(
      verifyResturantOwnerTokenMiddleware,
      uploads.single("img"),
      createFood
    ).get(getFood);
  
  

  
};
