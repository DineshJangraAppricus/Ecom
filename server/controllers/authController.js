const bycrpt = require("bcrypt");
const authService = require("../services/authService");
const utility = require("../utils/sendResponse");

exports.signup = async (req, res) => {
  try {
    const user = await authService.signup(req.body);
    const token = await authService.createJwtToken(user.id);
    return utility.sendSuccessResponse(201, { user: user, token: token }, res);
  } catch (err) {
    console.log(err);
    utility.sendErrorResponse(500, "Error while creating user", res);
  }
};
