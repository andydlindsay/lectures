const fs = require('fs');

const data = fs.readFileSync('./my-doc.txt', { encoding: 'utf8' });
console.log(data);

fs.readFile('./my-doc.txt', { encoding: 'utf8' }, (err, data) => {
  console.log(data);
});
