const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: { type: Number, required: true },
    colors: [{ type: String, required: true }],
    colorCount: { type: Number, required: true },
    gender: { type: String, required: true },
  },
  {
    timeStamp: true,
    versionKey: false,
  }
);

module.exports = model("product", productSchema);
