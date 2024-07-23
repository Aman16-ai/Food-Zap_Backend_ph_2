const mongoose = require("mongoose");

const RatingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },

  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
    require: true,
  },

  order : {
    type: mongoose.Schema.Types.ObjectId,
    ref: "order",
    require: true,
  },
  rating: {
    type: Number,
    require: true,
    min:1,
    max:5
  },

  review: {
    type: String,
  },
});

module.exports = mongoose.model("Rating", RatingSchema);
