const users = {};

exports.getUser = (customerID) => {
    return users[customerID] || null;
};

exports.findOrCreateUser = (customerID) => {
    if (!users[customerID]) {
        users[customerID] = {
            name: `User${customerID}`,
            surname: `Surname${customerID}`,
            balance: 0,
            transactions: [],
        };
    }
    return users[customerID];
};

exports.updateUserBalance = (customerID, amount) => {
    if (users[customerID]) {
        users[customerID].balance += amount;
    }
};

exports.addUserTransaction = (customerID, transaction) => {
    if (users[customerID]) {
        users[customerID].transactions.push(transaction);
    }
};
