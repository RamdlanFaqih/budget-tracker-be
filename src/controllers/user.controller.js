const express = require("express");

const { getAllUser } = require("../services/user.service");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await getAllUser();

    res.send(users);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
