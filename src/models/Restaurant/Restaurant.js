const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  cuisine: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "RestaurantAddress",
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 3,
  },
  //Create separate reviews models
  reviews: [
    {
      user: String,
      text: String,
      rating: Number,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
module.exports = {Restaurant}
