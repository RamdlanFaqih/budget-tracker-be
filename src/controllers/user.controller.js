const express = require("express");

const { getAllUser, createUser } = require("../services/user.service");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await getAllUser();

    res.send(users);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const newUserData = req.body;

    const user = await createUser(newUserData);
    res.send({
      data: user,
      message: "create user successfully",
    });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
