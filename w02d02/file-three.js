const higherOrderFn = (cb) => {
  const data = {
    initials: 'YV'
  };

  console.log('before timeout call');

  setTimeout(() => {
    data.initials = 'YAV';
    cb();
  }, 1000);

  console.log('after timeout call');
};

console.log('before main call');
const result = higherOrderFn(() => {
  console.log('inside callback');
});
console.log('after main call');
