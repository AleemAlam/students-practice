const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
  name: { type: String, required: true },
  pages: { type: Number, required: true },
  available: { type: Boolean, default: false },
});

module.exports = model("book", bookSchema);
