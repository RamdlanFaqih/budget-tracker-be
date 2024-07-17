const { findUsers, insertUser } = require("../models/user.model");
const bcrypt = require("bcrypt");

const getAllUser = async () => {
  const users = await findUsers();

  return users;
};

const createUser = async (newUserData) => {
  try {
    const hashedPassword = await bcrypt.hash(newUserData.password, 10);

    const userWithHashedPassword = {
      ...newUserData,
      password: hashedPassword,
    };
    const user = await insertUser(userWithHashedPassword);

    return user;
  } catch (err) {
    throw new Error(`error creating user ${err.message}`);
  }
};

module.exports = {
  getAllUser,
  createUser,
};
