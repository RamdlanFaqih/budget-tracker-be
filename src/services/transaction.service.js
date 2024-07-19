const {findTransactions} = require("../models/transaction.model")

const getAllTransaction = async () => {
    const transactions = await findTransactions();

    return transactions
}

module.exports = {
    getAllTransaction
}