class MyError extends Error {
  // smelahte em java
  constructor(message, state) {
    super(message); // from error
    this.state = state;
  }
}

const factoryMyError = (message, state) => {
  return new MyError(message, state);
};

module.exports = { factoryMyError, MyError };
