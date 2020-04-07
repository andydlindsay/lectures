console.log('before the setTimeout');

const delay = 0;

setTimeout(() => {
  console.log('inside the setTimeout');
}, delay);

console.log('after the setTimeout');

// in what order will the above console.log's fire?
