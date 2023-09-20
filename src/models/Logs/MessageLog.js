const mongoose = require('mongoose')

const messageLogsSchema = new mongoose.Schema({
    message : {
        type : String
    }
},{timestamps:true})

module.exports = mongoose.model("MessageLog",messageLogsSchema)
