const generatePromise = (name, rejects = false, delay = 3000, isRandom = false) => {
  const wait = isRandom ? Math.floor(Math.random() * delay) : delay;

  return new Promise((resolve, reject) => {
    if (rejects) {
      return setTimeout(() => reject(name), wait);
    }
    setTimeout(() => resolve(name), wait);
  });
};

module.exports = generatePromise;
