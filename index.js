require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

const userController = require("./src/controllers/user.controller")

const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Budget Tracker API Ready to use !");
});

app.use("/users", userController)

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
