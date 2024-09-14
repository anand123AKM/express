const express = require("express");
const app = express();

// app.get("/", (req, res) => {
//   res.write("<h1>welcome to home page</h1>");
//   res.write("<h1>welcome to home page again</h1>");
//   res.send();
// });
app.get("/api", (req, res) => {
  res.json({
    //useing send instead of json is also valid
    id: "123",
    name: "John Doe",
    email: "akm@gmai.com",
    phone: "1234567890",
    address: "123, Park Street",
  });
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
