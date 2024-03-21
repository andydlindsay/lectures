const generateRandomPromise = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        return resolve(name);
      }
      reject(name);
    }, 1000);
  });
};

module.exports = generateRandomPromise;
