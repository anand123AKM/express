const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("welcome to home page");
});

app.get("/about", (req, res) => {
  res.send("welcome to about page");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
