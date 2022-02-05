const express = require("express");
const app = express();
const userFun = require("./user.js");
app.get("/", userFun);
