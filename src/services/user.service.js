const { generateToken } = require("../helpers/jwt");
const {
  findUsers,
  insertUser,
  findUserByEmail,
  updateUserBalance,
  findUserById,
} = require("../models/user.model");
const bcrypt = require("bcrypt");

const getAllUser = async () => {
  const users = await findUsers();

  return users;
};

const getUser = async (email) => {
  const user = await findUserByEmail(email);
  if (!user) {
    throw Error("user not found");
  }
  return user;
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

const updateBalanceUser = async (id, newUserBalance) => {
  try {
    const user = await findUserById(id);
    if (!user) {
      throw Error("user not found");
    }
    const updateUser = await updateUserBalance(id, newUserBalance);

    return updateUser;
  } catch (err) {
    throw new Error(err.message);
  }
};

const loginUser = async (email, password) => {
  try {
    if (!email | !password) {
      throw Error("email or password is required");
    }
    const user = await findUserByEmail(email);
    if (user) {
      const userId = user.id;
      const userEmail = user.email;
      const userPassword = user.password;
      const compared = await bcrypt.compare(password, userPassword);
      console.log(compared);
      if (compared) {
        const token = await generateToken({
          id: userId,
          email: userEmail,
        });
        return token;
      } else {
        throw Error("Login Failed");
      }
    } else {
      throw Error("Email or Password Invalid");
    }
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  getAllUser,
  getUser,
  createUser,
  loginUser,
  updateBalanceUser,
};
