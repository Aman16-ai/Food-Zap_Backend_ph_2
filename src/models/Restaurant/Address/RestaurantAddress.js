const mongoose = require("mongoose");
const { BaseAddress } = require("../../Base/BaseAddress");

const restaurantAddressSchema = new mongoose.Schema({
  restaurantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true,
  },
});

const RestaurantAddress = BaseAddress.discriminator('RestaurantAddress',restaurantAddressSchema)
module.exports = {RestaurantAddress}