const errorTest = (req, res, next) => {
  next(new Error());
};

module.exports = {
  errorTest,
};
