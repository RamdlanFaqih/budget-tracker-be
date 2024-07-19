const prisma = require("../config");

const findTransactions = async () => {
  const transactions = await prisma.transaction.findMany();

  return transactions;
};

module.exports = {
    findTransactions
}
