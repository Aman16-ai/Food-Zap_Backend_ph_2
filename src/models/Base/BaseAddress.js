const mongoose = require("mongoose");

const baseAddressSchema = new mongoose.Schema({
  street: String,
  city: String,
  state: String,
  zipcode: String,
  lat: String,
  long: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

baseAddressSchema.pre("save", function (next) {
  this.updatedAt = new Date();
  next();
});

const BaseAddress = mongoose.model("BaseAddress", baseAddressSchema);

module.exports = {
    BaseAddress
}