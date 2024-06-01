const express = require('express');
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const port = process.env.PORT;


app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get('/', (req, res) => {
  console.log('Hi there');
  res.send({Hi: 'Error'});
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});