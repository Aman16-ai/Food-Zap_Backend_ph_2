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
  createdAt: {
    type: Date,
    default: Date.now,
  },

  image: {
    type:String,
    require:true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
    index:{unique:true}
  },
  openingTime: {
    type: String,
    required: true,
  },
  openingDays: {
    type: [String],
    required: true,
    enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  },
  closingTime: {
    type: String,
    required: true,
  },
  closingDays: {
    type: [String],
    required: true,
    enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  },
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
module.exports = { Restaurant };
