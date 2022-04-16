// app.js
const express = require("express");
const app = express();

app.get("/", (_, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
