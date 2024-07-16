require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

const port = process.env.PORT

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Budget Tracker API Ready to use !");
});

app.listen(port, (req, res) => {
  console.log(`App listening on port ${port}`);
});
