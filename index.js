const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world " + process.env.test);
});

app.listen(5000, () => {
  console.log(process.env.test);
  console.log(`Server is running on http://localhost:5000`);
});
