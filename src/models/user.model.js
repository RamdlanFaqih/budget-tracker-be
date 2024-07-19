const prisma = require("../config");

const findUsers = async () => {
  const users = await prisma.user.findMany();

  return users;
};

const findUserByEmail = async (userEmail) => {
  const user = await prisma.user.findUnique({
    where: {
      email: userEmail,
    },
  });

  return user;
};

const findUserById = async (userId) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    }
  })

  return user;
}

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

const updateUserBalance = async (userId, userBalance) => {
  const newBalance = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      balance: userBalance,
    },
  });

  return newBalance;
};

module.exports = {
  findUsers,
  insertUser,
  findUserByEmail,
  findUserById,
  updateUserBalance,
};
