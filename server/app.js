require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./studentRouter");

const PORT = process.env.PORT || 3000; // Fallback to 3000 if PORT is not defined
const MONGO_URI = process.env.Mongo_URL;

const app = express();
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected...");
  })
  .catch((err) => {
    console.log(err);
  });

app.use('/students',router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
