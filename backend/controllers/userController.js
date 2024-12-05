const userService = require('../services/userService');

exports.getUserInfo = async (req, res, next) => {
    try {
        const { customerID } = req.params;
        const userInfo = await userService.getUserInfo(customerID);
        res.status(200).json(userInfo);
    } catch (err) {
        next(err); 
    }
};
