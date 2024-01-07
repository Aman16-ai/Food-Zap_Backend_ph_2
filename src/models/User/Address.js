const mongoose = require("mongoose");
const { BaseAddress } = require("../Base/BaseAddress");

const userAddressSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const UserAddress = BaseAddress.discriminator("UserAddress", userAddressSchema);
module.exports = {UserAddress}
