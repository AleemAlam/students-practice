const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    fullName: { type: String, required: true },
    books: [{ type: Schema.Types.ObjectId, ref: "book" }],
  },
  {
    timestamps: { createdAt: "created_at" },
    versionKey: false,
  }
);

module.exports = model("user", userSchema);
