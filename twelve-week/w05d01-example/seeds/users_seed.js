const faker = require('faker');

const createFakeUser = () => ({
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
  email: faker.internet.email(),
  age: faker.random.number(40)
});

exports.seed = async function(knex) {
  const fakeUsers = [];
  const desiredFakeUsers = 1000;
  for (let i = 0; i < desiredFakeUsers; i++) {
    fakeUsers.push(createFakeUser());
  }
  await knex('users').insert(fakeUsers);
};
