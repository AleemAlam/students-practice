const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");

router.get("/", async (req, res) => {
  let { price, minColor, color, gender } = req.query;
  price = price || 0;
  minColor = minColor || 1;
  color = color || false;
  gender = gender || false;
  let products;
  try {
    if (price || minColor || color || gender) {
      products = await Product.find({
        $and: [{ price: { $gte: price } }, { colorCount: { $gte: minColor } }],
      })
        .lean()
        .exec();

      if (color) {
        products = products.filter((pro) =>
          pro.colors.indexOf(color) == -1 ? false : true
        );
      }
      if (gender) {
        products = products.filter((pro) => pro.gender == gender);
      }
    }
    return res.status(200).json({ products });
  } catch (error) {}
});

// ---- total number of product
router.get("/totalNumOfProducts", async (req, res) => {
  try {
    const product = await Product.find().lean().exec();
    let totalProduct = 0;
    for (let i = 0; i < product.length; i++) {
      totalProduct += product[i].colors.length;
    }
    console.log(totalProduct);
    return res.status(200).json({ "totalProduct ": totalProduct });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

// ---- colour which has the most products
router.get("/mostColor", async (req, res) => {
  try {
    const product = await Product.find().lean().exec();
    const allColors = {};
    product.forEach(({ colors }) => {
      colors.forEach((color) => {
        allColors[color] = allColors[color] + 1 || 1;
      });
    });
    console.log(allColors);
    let max = 0;
    let mostColor = "";
    for (let key in allColors) {
      if (max < allColors[key]) {
        max = key;
        mostColor = key;
      }
    }
    return res.status(200).json({ color: mostColor });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const product = await Product.create({
      ...req.body,
      colorCount: req.body.colors.length,
    });
    return res.status(201).json({ status: "success" });
  } catch (error) {
    return res.status(500).json({ status: "failed" });
  }
});

module.exports = router;
