const accounts = {};
const transactions = {};

exports.createAccount = (customerID, initialCredit) => {
    const id = `ACC${Date.now()}`;
    accounts[id] = { id, customerID, balance: initialCredit };
    return accounts[id];
};

exports.addTransaction = (accountID, amount) => {
    const id = `TXN${Date.now()}`;
    transactions[id] = { id, accountID, amount };
};
