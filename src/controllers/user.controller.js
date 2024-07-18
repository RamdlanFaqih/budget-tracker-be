const express = require("express");

const { getAllUser, createUser, getUser, loginUser } = require("../services/user.service");
const verifyToken = require("../middleware/auth");

const router = express.Router();

router.get("/", verifyToken, async (req, res) => {
  try {
    const users = await getAllUser();

    res.send(users);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.get("/user", async (req, res) => {
  try {
    const email = req.body.email;

    const user = await getUser(email);
    res.send(user)
  } catch (err) {
    res.status(400).send(err.message)
  }
} )

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

router.post("/user", async (req, res) => {
  try {
    const {email, password} = req.body;

    const login = await loginUser(email, password);

    res.send({
      message: 'Login Successfully',
      token: login
    })
  } catch (err) {
    res.status(400).json({
      message: err.message
    })
  }
})

module.exports = router;
