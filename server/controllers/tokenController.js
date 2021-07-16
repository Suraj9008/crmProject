const jwt = require("jsonwebtoken");
const generateResponse = require("../libs/responseLib");
const winstonLogger = require("../libs/winstonLib");
require('dotenv/config');
async function verify(req, res) {
  const authToken = req.body.authToken;
  try {
    const valid = await jwt.verify(authToken, process.env.JWTSECRET);
    winstonLogger.info("Token Validated");
    res.send(generateResponse(200, false, true, "Valid Token"));
  } catch (err) {
    winstonLogger.info("Invalid Token provided");
    res.send(generateResponse(403, true, false, "Invalid Token"));
  }
}

module.exports.verify = verify;