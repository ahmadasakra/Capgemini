const userRepository = require('../repositories/userRepository');

exports.getUserInfo = async (customerID) => {
    const user = userRepository.getUser(customerID);
    if (!user) {
        throw new Error('User not found');
    }
    return {
        name: user.name,
        surname: user.surname,
        balance: user.balance,
        transactions: user.transactions,
    };
};
