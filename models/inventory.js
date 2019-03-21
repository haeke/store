const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
  id: String,
  title: { type: String, required: true },
  img: { type: String, required: true },
  price: { type: Number, required: true },
  company: { type: String, required: true },
  info: { type: String, required: true },
  inCart: { type: Boolean, required: true },
  count: { type: Number, required: true },
  total: { type: Number, required: true },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Inventory = mongoose.model("inventory", inventorySchema);
