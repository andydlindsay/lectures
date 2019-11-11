const faker = require('faker');

const createFakeUser = () => ({
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
  email: faker.internet.email(),
  age: faker.random.number(40) + 10,
  country: faker.address.country(),
  payment_due_date: faker.date.between('Nov 1, 2019', 'Nov 30, 2019')
});

exports.seed = async function(knex) {
  const fakeUsers = [];
  const desiredFakeUsers = 10000;
  for (let i = 0; i < desiredFakeUsers; i++) {
    fakeUsers.push(createFakeUser());
  }
  return await knex('users').insert(fakeUsers);
};
