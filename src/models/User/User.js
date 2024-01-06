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
  admin : {
    type:Boolean,
    default:false
  },  
  user_type : {
    type:String,
    enum : ['genric','restaurant_owner','restaurant_manager','delivery'],
    default: 'genric'
  }
});

module.exports = mongoose.model("User", userSchema);
