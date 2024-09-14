const express = require("express");
const app = express();
const path = require("path");

// console.log(__dirname);
// console.log(path.join(__dirname, "../public"));
// const staticPath = path.join(__dirname, "../public");

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../hbs"));
app.get("", (req, res) => {
  res.render("index");
});

// builtin middleware
// app.use(express.static(staticPath));

app.listen(8000, () => {
  console.log("listening to the port no 8000");
});
