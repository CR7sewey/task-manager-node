const { MyError } = require("../errors/errors");

// capturado na app!!!
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof MyError) {
    console.log("AQUI ------------------------------------------------");
    return res.status(err.state).json({ msg: err.message });
  }
  return res
    .status(500)
    .json({ msg: "Something went wrong, please try again" }); // for example when some id as not the same length as it is supposed to be
};

module.exports = errorHandlerMiddleware;
