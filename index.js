const express = require("express");
require("dotenv").config();
const app = express();

app.listen(process.env.PORT, () => {
  console.log("App is listening...");
});

app.get("/", (req, res) => {
  res.send("Hello word");
});

app.get("/home", (req, res) => {
  res.send("<h1>Home</h1>");
});
//console.log("Hello World");
