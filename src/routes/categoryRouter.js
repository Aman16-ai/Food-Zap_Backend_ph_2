const { createChildCategory, getAllChildCateogry } = require("../controllers/Category/childCategory")
const { createParentCategory, getAllParentCategory } = require("../controllers/Category/parentCategory")
const { verifyResturantOwnerTokenMiddleware } = require("../middleware/auth")
const uploads = require("../middleware/uploadMediaMiddlware")


const categoryRouter = (app) => {
    app.route("/category/parentCategory")
    .post(verifyResturantOwnerTokenMiddleware,uploads.single('img'),createParentCategory)
    .get(getAllParentCategory)

    app.route("/category/childCategory")
    .post(verifyResturantOwnerTokenMiddleware,uploads.single('img'),createChildCategory)
    .get(getAllChildCateogry)
}

module.exports = categoryRouter