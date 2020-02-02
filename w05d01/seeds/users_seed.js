const faker = require('faker');
const moment = require('moment');

const start = moment().startOf('month').format('MMM D, YYYY');
const end = moment().endOf('month').format('MMM D, YYYY');
const desiredFakeUsers = 50000;
const maxAge = 40;

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
    if (fakeUsers.length > 10000) {
      await knex('users').insert(fakeUsers);
      fakeUsers = [];
    }
  }
  return knex('users').insert(fakeUsers);
};
