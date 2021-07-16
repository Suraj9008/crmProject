const winston = require('../libs/winstonLib');

module.exports = function (error, req, res, next) {
    winston.error(error.message);
    res.status(500).send("Something went wrong");
}