const setTimeoutAsync = (wait) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, wait);
  });
};

module.exports = setTimeoutAsync;
