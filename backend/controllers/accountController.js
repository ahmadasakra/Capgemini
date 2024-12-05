const accountService = require('../services/accountService');

exports.createAccount = async (req, res, next) => {
    try {
        const result = await accountService.createAccount(req.body);
        res.status(201).json(result);
    } catch (err) {
        next(err);
    }
};
