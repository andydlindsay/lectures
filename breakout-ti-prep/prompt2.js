// In what order will the following console.logs fire?

console.log('One');

const createTimeout = (delay) => {
  setTimeout(() => {
    console.log('Two');
  }, delay);
};

console.log('Three');
createTimeout(3000);

setTimeout(() => {
  console.log('Four');
}, 2000);

console.log('Five');
