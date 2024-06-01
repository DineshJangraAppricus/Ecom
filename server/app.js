const express = require("express");
const morgan = require("morgan");
const app = express();
const UserModel = require("./models/users");

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.get("/", (req, res) => {
  console.log("Hi there");
  res.send({ Hi: "Error" });
});

app.post("/", (req, res) => {
  const body = req.body;
  UserModel.create(body);
  res.send({Hi: 'There'})
})

module.exports = app;
