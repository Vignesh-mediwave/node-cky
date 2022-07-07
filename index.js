const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Heloo,This is Vignesh");
});

app.get("/yummy", (req, res) => {
  res.send("Welcome to Yummy World");
});

app.get("/exit", (req, res) => {
  res.send("Thank Youuu!!!!");
});

const port = process.env.port || 8080;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
