import express from "express";
import mongosse from "mongosse";
import bodyParser from "body-parse";

// Creating express app
const uri = "mongodb+srv://nico:nico@cluster0.9ju80xw.mongodb.net/?retryWrites=true&w=majority";
mongosse
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
