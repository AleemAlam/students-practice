const { Schema, model, Mongoose } = require("mongoose");

const productSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  colors: [{ type: String, required: true }],
  colorCount: { type: Number, required: true },
  gender: { type: String, required: true }, // male, female, both
});

module.exports = model("product", productSchema);
