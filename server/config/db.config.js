const mongoose = require('mongoose');

exports.connectDB = async () => {
    try {
      const connection = await mongoose.connect(process.env.MONGO_CONNECTION, {
        useNewUrlParser: true,
      });
      console.log(`MongoDB Connected: {conn.connection.host}`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }

