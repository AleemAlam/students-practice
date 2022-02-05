const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");

router.get("/", async (req, res) => {
  let { price, minColor, color, gender } = req.query;
  price = Number(price) || 0;
  minColor = minColor || 0;
  gender = gender || false;
  color = color || false;
  let products;
  try {
    if (price || minColor || color || gender) {
      products = await Product.find({
        $and: [{ price: { $gte: price } }, { colorCount: { $gte: minColor } }],
      })
        .lean()
        .exec();
      if (gender) {
        products = products.filter((pro) => pro.gender == gender);
      }
      if (color) {
        products = products.filter((pro) => {
          if (pro.colors.indexOf(color) != -1) {
            return true;
          }
          return false;
        });
      }
    } else {
      products = await Product.find().lean().exec();
    }
    res.status(200).json({ products });
  } catch (error) {
    return res.status(500).json({ status: "failed", message: error.message });
  }
});
router.get("/total_products", async (req, res) => {
  try {
    const products = await Product.find().lean().exec();
    res.status(200).json({ products });
  } catch (error) {
    return res.status(500).json({ status: "failed", message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    product = await Product.create({
      ...req.body,
      colorCount: req.body.colors.length,
    });
    return res.status(201).json({ status: "success" });
  } catch (error) {
    return res.status(500).json({ status: "failed", message: error.message });
  }
});

module.exports = router;
