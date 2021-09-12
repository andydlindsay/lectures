const faker = require('faker');
const moment = require('moment');

const start = moment().startOf('month').subtract(1, 'days').format('MMM D, YYYY');
const end = moment().endOf('month').add(1, 'days').format('MMM D, YYYY');
const desiredFakeUsers = process.argv[3] || 20000;
const maxAge = 100;
const batchSize = 5000;

const createFakeUser = () => ({
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
  email: faker.internet.email(),
  age: faker.random.number(maxAge),
  country: faker.address.country(),
  payment_due_date: faker.date.between(start, end)
});

exports.seed = async (knex) => {
  let fakeUsers = [];
  for (let i = 0; i < desiredFakeUsers; i++) {
    fakeUsers.push(createFakeUser());
    if (fakeUsers.length >= batchSize) {
      await knex('users').insert(fakeUsers);
      fakeUsers = [];
    }
  }
  return knex('users').insert(fakeUsers);
};
