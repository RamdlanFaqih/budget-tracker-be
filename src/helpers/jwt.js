require("dotenv").config();

const jwt = require("jsonwebtoken");

const tokenData = process.env.SECRET_KEY

const generateToken = async (payload) => {
    const token = await jwt.sign(payload, tokenData, {
        expiresIn: "1h"
    });
    return token
}

module.exports = {generateToken}