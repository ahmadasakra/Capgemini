const accountController = require('./controllers/accountController');
const userController = require('./controllers/userController');

module.exports = (app) => {
    app.post('/api/accounts', accountController.createAccount);
    app.get('/api/users/:customerID', userController.getUserInfo);
};
