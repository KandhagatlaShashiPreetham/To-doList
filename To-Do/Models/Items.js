const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
  Name: {
    type: String,
  },
  RDate: {
    type: Date,
  },
  ListName: {
    type: String,
  },
});

module.exports = mongoose.model("Items", listSchema);
