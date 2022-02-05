const express = require("express");
const connect = require("./config/db");

const app = express();

const start = async () => {
  await connect();
  app.listen(3300, () => {
    console.log("Working");
  });
};
start();
