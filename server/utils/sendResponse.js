exports.sendErrorResponse = (statusCode, errMessage, res) => {
  return res.status(statusCode).json({
    errMessage: errMessage,
  });
};

exports.sendSuccessResponse = (statusCode, responseData, res) => {
  return res.status(statusCode || 200).json({
    data: responseData ? responseData : null,
  });
};
