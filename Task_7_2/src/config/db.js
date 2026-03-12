const mongoose = require("mongoose");

const dbUrl = "mongodb://localhost:27017/task";

const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};

module.exports = connectDB;