const accountRepository = require('../repositories/accountRepository');
const userRepository = require('../repositories/userRepository');

exports.createAccount = async ({ customerID, initialCredit }) => {
    if (!customerID || initialCredit === undefined) {
        throw new Error('Invalid input');
    }

    const user = userRepository.findOrCreateUser(customerID);
    const account = accountRepository.createAccount(customerID, initialCredit);

    if (initialCredit > 0) {
        accountRepository.addTransaction(account.id, initialCredit);
        userRepository.updateUserBalance(customerID, initialCredit);
    }

    return { accountID: account.id };
};
