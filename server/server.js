const dotenv = require("dotenv");
dotenv.config({path: '../config.env'});


process.on('uncaughtException', (err) => {
  console.log(err.name, err.message);
  console.log('UNCAUGHT REJECTION! Shutting down...');
  process.exit(1);
});

const mongoose = require("mongoose");
const app = require("./app");

const port = process.env.PORT;

mongoose
  .connect(process.env.MONGO_CONNECTIONS, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to mongoDB successfully");
  })
  .catch((error) => {
    console.log(process.env.PORT)
    console.error(error.message);
    process.exit(1);
  });

const server = app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

process.on('unhandledRejection', err => {  
  console.log(err.name, err.message);
  console.log('UNHANDLED REJECTION! Shutting down...');
  server.close(() => {
    process.exit(1);
  });
});