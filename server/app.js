const express = require("express");
const morgan = require("morgan");
const app = express();
const userRoutes = require("./routes/userRoutes");

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use("/api/v1", userRoutes);

module.exports = app;
