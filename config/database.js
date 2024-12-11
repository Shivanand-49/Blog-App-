const mongoose = require('mongoose');

require('dotenv').config();

const connectDB = async () => {
  try {
    const uri = process.env.DATABASE_URI; // Ensure this is set in your environment
    if (!uri) throw new Error("MongoDB connection string is missing!");

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('DB Connected Successfully');
  } catch (error) {
    console.error('Db connection issue:', error.message);
    process.exit(1); // Exit with failure
  }
};

module.exports = connectDB;
