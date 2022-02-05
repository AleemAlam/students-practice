const express = require("express");
const connect = require("./config/db");
const app = express();
const userController = require("./controllers/user.controller");
const bookController = require("./controllers/book.controller");
app.use(express.json());

app.use("/user", userController);
app.use("/book", bookController);

const start = async () => {
  await connect();

  app.listen(process.env.PORT || 3300, () => {
    console.log(`Port is listening on 3300`);
  });
};

start();
