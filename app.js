// app.js
const express = require("express");
const app = express();

const mongoose = require("mongoose");

mongoose.connect("http://localhost:3000", () => {
  console.log("connected to database");
});

app.get("/", (_, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
