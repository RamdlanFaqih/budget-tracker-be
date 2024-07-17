const prisma = require("../config");

const findUsers = async () => {
  const users = await prisma.user.findMany();

  return users;
};

const insertUser = async (userData) => {
  const user = await prisma.user.create({
    data: {
      name: userData.name,
      email: userData.email,
      password: userData.password,
    },
  });

  return user;
};

module.exports = {
  findUsers,
  insertUser,
};
