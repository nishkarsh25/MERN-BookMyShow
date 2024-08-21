const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_ATLAS_URL);
    console.log('Connected to Database');
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectDB;
