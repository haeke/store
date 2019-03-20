const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
  id: String,
  title: { type: String },
  img: { type: String },
  price: { type: Number },
  company: { type: String },
  info: { type: String },
  inCart: { type: Boolean },
  count: { type: Number },
  total: { type: Number },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Inventory = mongoose.model("inventory", inventorySchema);
