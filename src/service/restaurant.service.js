const Food = require("../models/Food/Food");
const mongoose = require("mongoose");
class RestaurantService {

  async getCategoriesWithCount(restaurantID) {
    console.log(restaurantID);
    const categoriesCount = await Food.aggregate([
      { $match: { restaurantId: new mongoose.Types.ObjectId(restaurantID) } },

      {
        $group: {
          _id: "$parentCategory",
          count: { $sum: 1 },
        },
      },
      {
        $lookup: {
          from: "parentcategories",
          localField: "_id",
          foreignField: "_id",
          as: "category",
        },
      },
      {
        $unwind: "$category",
      },
      {
        $project: {
          _id: 0,
          categoryId: '$_id',
          categoryName: '$category.name',
          categoryImg : '$category.image',
          count: 1,
        },
      },
    ]);
    return categoriesCount;
  }
}

module.exports = RestaurantService;
