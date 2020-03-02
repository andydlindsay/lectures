let x = 1;
console.log('before call', x);

setTimeout(() => {
  x++;
  console.log('inside call', x);
}, 1000);

console.log('after call', x);
