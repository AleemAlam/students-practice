const express = require("express");
const connect = require("./config/db");
const productController = require("./controllers/product.controller");
const app = express();
app.use(express.json());
app.use("/products", productController);
const start = async () => {
  await connect();

  app.listen(process.env.PORT || 3300, () => {
    console.log(`Port is listening on 3300`);
  });
};

start();
