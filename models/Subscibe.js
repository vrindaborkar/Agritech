const mongoose = require("mongoose");

const Subscribe = mongoose.model(
  "Subscribe",
  new mongoose.Schema({
    userId:String,
    date:String,
    validity:String,
    stalls :Number
  })
);

module.exports = Subscribe;