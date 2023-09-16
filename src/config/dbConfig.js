const mongoose = require("mongoose");
// const url = "mongodb://127.0.0.1:27017/foodZap";

const connectDB = async () => {
  try {
    const result = await mongoose.connect(process.env.db_url);
    console.log("Database connected successfully");
  } catch (err) {
    console.log(err);
  }
};
module.exports = connectDB;
