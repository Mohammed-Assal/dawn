const mongoose = require("mongoose");

require("dotenv").config();
//const dbURI = "mongodb://localhost:27017"
//const dbURI = "mongodb+srv://dawnestateinfo_db_user:YccSqFcTzaRkfdZU@cluster0.haybxbq.mongodb.net//?appName=cluster0";
const dbURI = "mongodb+srv://dawnestateinfo_db_user:YccSqFcTzaRkfdZU@cluster0.haybxbq.mongodb.net/test?retryWrites=true&w=majority&appName=cluster0";

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;