const { MyError } = require("../errors/errors");

// capturado na app!!!
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof MyError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res
    .status(500)
    .json({ msg: "Something went wrong, please try again" });
};

module.exports = errorHandlerMiddleware;
