require("dotenv").config();
const knexCleaner = require('knex-cleaner');

const client = require('knex')({
  client: 'pg',
  connection: process.env.PG_CONNECTION_STRING
});

const myFunc = async () => {
  client('users').select('*').then(data => console.log(data.length));
  await knexCleaner.clean(client);
  client('users').select('*').then(data => console.log(data.length));
};

myFunc();
