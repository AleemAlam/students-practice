const express = require("express");
const app = express();
const data = require("./data.json");
app.use(middle);
app.get("/", (req, res) => {
  res.send(data);
});
app.get("/users", (req, res) => {
  res.send({ user: { name: "Aleem", age: 23 } });
});
function middle(req, res, next) {
  console.log("This is a middleware");
  next();
}
app.listen(1500, () => {
  console.log("Listening on port 2500");
});
