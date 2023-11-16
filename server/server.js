const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const Feeds = require("./models/Feed.js");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 8080;
mongoose.connect(process.env.MONGO_URL);

app.get("/feeding", async (req, res) => {
  const feeds = await Feeds.find(req.query);

  res.json(feeds);
});

app.post("/feeding", async (req, res) => {
  const newFeed = await Feeds.create(req.body);
  res.json(newFeed);
});

app.delete("/feeding/:id", async (req, res) => {
  console.log("something");
  try {
    console.log(req.params);
    const deleteFeed = await Feeds.findByIdAndDelete(req.params.id);
    res.json(deleteFeed);
  } catch (error) {
    console.log(error);
  }
});

app.put("/feeding/:id", async (req, res) => {
  const updatedFeed = await Feeds.findByIdAndUpdate(req.params.id, req.body);
  res.json(updatedFeed);
});

app.listen(PORT, () => console.log(`App is running PORT ${PORT}`));
