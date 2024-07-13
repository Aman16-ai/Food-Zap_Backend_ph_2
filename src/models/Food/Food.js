const mongoose = require("mongoose")

const foodSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
    }, 
    description : {
        type:String,
        require:true,
    },
    img : {
        type:String,
        require:true,
    }, 
    restaurantId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Restaurant"
    }, 
    parentCategory : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "ParentCategory"
    }
},{timestamps:true})


module.exports = mongoose.model('Food',foodSchema)