class MyError extends Error {
  // smelahte em java
  constructor(error, state) {
    super(error); // from error
    this.state = state;
  }
}

const factoryMyError = (error, state) => {
  return new MyError(error, state);
};

module.exports = { factoryMyError, MyError };
