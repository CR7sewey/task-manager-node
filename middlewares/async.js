// just to replace async in task
const asyncFunctions = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (e) {
      next(e);
    }
  };
};

module.exports = asyncFunctions;
