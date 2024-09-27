const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

app.get("/api/", (req, res) => {
  res.send("users data" + process.env.test);
});

app.get("/api/users", (req, res) => {
  const users = {
    user1: "First User",
    user2: "Test  User",
    user2: "Test  User",
    user2: "Test  User",
  };
  res.status(200).json(users);
});

app.listen(5000, () => {
  console.log(process.env.test);
  console.log(`Server is running on http://localhost:5000`);
});
