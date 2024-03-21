const generatePromise = (name, rejects = false, delay = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (rejects) {
        return reject(name);
      }
      resolve(name);
    }, delay);
  });
};

module.exports = generatePromise;
