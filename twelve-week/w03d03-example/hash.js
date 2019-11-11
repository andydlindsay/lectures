const bcrypt = require('bcryptjs');

const password = 'abcd1234';
console.log('before:', password);

bcrypt.hash(password, 10)
  .then((hashedPassword) => {
    console.log('after:', hashedPassword);
    return bcrypt.compare(password, hashedPassword);
  })
  .then((result) => {
    console.log('compare result:', result);
  });
