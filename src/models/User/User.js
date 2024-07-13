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
  email: {
    type:String,
    default:null
  },
  admin : {
    type:Boolean,
    default:false
  },  
  user_type : {
    type:String,
    enum : ['customer','restaurant_owner','restaurant_manager','delivery'],
    default: 'customer'
  },
  onBoarded: {
    type:Boolean,
    default : false
  }
});

module.exports = mongoose.model("User", userSchema);
