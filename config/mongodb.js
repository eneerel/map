const mongoose = require("mongoose");

const connectDB = async (uri) => {
  try {
    await mongoose.connect(uri);
    console.log("MONGODB Connected");
  } catch (error) {
    console.log("ERROR", error);
  }
};
module.exports = connectDB;
