const jwt = require("jsonwebtoken");
const util = require("util");
const User = require("../models/users");

exports.signup = async (userData) => {
  return User.create(userData);
};

exports.createJwtToken = async (userId) => {
  return util.promisify(jwt.sign)({ id: userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.verifyToken = async (token, secret) => {
  return util.promisify(jwt.verify)(token, secret);
};
