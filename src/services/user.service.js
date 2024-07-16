const { findUsers } = require("../models/user.model");

const getAllUser = async () => {
  const users = await findUsers();

  return users;
};

module.exports = {
  getAllUser,
};
