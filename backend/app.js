require('dotenv').config({path: '.env'});
const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.9ju80xw.mongodb.net/?retryWrites=true&w=majority`
const app = express()

// Handling CORS policy
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE"); // If using .fetch and not axios
    res.header("Access-Control-Allow-Headers", "auth-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
  })

// Express app
mongoose.set('strictQuery', false);
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

  // Routes
app.get("/", (req, res) => {
    res.send("Test")
})


app.listen(process.env.APP_PORT, () => {
    console.log(`Listening on ${process.env.APP_PORT}`)
})