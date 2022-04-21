// app.js
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

const mongoose = require("mongoose");

require("./Item");
const Item = mongoose.model("Item");

mongoose.connect("mongodb://localhost/item", () => {
  console.log("connected to database");
});

app.get("/", (_, res) => {
  res.send("Hello World!");
});

app.post("/item", (req, res) => {
  const newBook = {
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
  };

  const item = new Item(newBook);

  item
    .save()
    .then(() => {
      console.log("Item Created!");
    })
    .catch((err) => {
      if (err) throw err;
    });

  res.send("Connected to POST /item");
});

app.get("/items", (_, res) => {
  Item.find()
    .then((items) => {
      res.json(items);
    })
    .catch((err) => {
      if (err) throw err;
    });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
