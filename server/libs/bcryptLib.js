const bcrypt = require("bcrypt");

async function generateHashedPassword(pass) {
  const salt = bcrypt.genSaltSync(10);
  return await bcrypt.hash(pass, salt);
}

async function isPasswordRight(toCheck, hash) {
  const valid = await bcrypt.compare(toCheck, hash);
  return valid;
}

module.exports.generateHashedPassword = generateHashedPassword;
module.exports.isPasswordRight = isPasswordRight;