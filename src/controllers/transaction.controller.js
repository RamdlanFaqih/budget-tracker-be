const express = require("express");

const { getAllTransaction } = require("../services/transaction.service");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const transaction = await getAllTransaction();

    res.send(transaction);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router