require('dotenv').config()
const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.9ju80xw.mongodb.net/?retryWrites=true&w=majority`
const app = express()

// Creating express app
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected");
  })
  .catch(e => {
    console.log("enculé", e);
  });

  app.use(bodyParser.json())
