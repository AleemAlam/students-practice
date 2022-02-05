const User = require("../models/user.model");
const express = require("express");
const router = express.Router();
router.get("/", async (req, res) => {
  try {
    const users = await User.find()
      .populate({
        path: "books",
        match: { available: true },
      })
      .lean()
      .exec();
    res.status(200).json({ users });
  } catch (error) {
    return res.status(500).json({ status: "failed", message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email }).exec();
    if (user)
      return res
        .status(400)
        .send({ status: "failed", message: "user already exists" });

    user = await User.create({ ...req.body });
    return res.status(201).json({ status: "success" });
  } catch (error) {
    return res.status(500).json({ status: "failed", message: error.message });
  }
});
module.exports = router;
