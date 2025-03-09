class DivideByZeroError extends Error {
  constructor(message) {
    super(message);
    this.name = "DividedByZeroErrorHandler";
  }
}

module.exports = {
  DivideByZeroError,
};
