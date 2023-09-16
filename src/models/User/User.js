const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    default:null
  },
  lastName: {
    type: String,
    default:null
  },
  phoneNo: {
    type: String,
    require: true,
  },   
});

module.exports = mongoose.model("User", userSchema);
