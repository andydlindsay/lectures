const fs = require('fs');

const data = fs.readFileSync('./index.html', { encoding: 'utf8' });
console.log(data);

const cb = (err, data) => {
  if (err) throw err;
  console.log(data);
};

fs.readFile('./index.html', { encoding: 'utf8' }, cb);

console.log('I am here');
