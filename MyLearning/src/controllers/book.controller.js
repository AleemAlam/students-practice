const Book = require("../models/book.model");
const express = require("express");
const router = express.Router();
router.get("/", async (req, res) => {
  try {
    const books = await Book.find().lean().exec();
    res.status(200).json({ books });
  } catch (error) {
    return res.status(500).json({ status: "failed", message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    book = await Book.create({ ...req.body });
    return res.status(201).json({ status: "success" });
  } catch (error) {
    return res.status(500).json({ status: "failed", message: error.message });
  }
});
module.exports = router;
