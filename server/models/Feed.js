const mongoose = require("mongoose");

const { Schema } = mongoose;

const feedSchema = new Schema({
  name: String,
  startTime: Date,
  endTime: Date,
});

const Feeds = mongoose.model("Feed", feedSchema);

module.exports = Feeds;
