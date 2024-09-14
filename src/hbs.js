const express = require("express");
const hbs = require("hbs");
const path = require("path");
const app = express();
const port = 8000;
app.use(express.static(path.join(__dirname, "/css")));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../templets/views"));
hbs.registerPartials(path.join(__dirname, "../templets/partials"));
app.get("", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("*", (req, res) => {
  res.render("404error", {
    error: "Opps! Page Not Found",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
