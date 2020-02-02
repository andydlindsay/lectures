require("dotenv").config();

const client = require('knex')({
  client: 'pg',
  connection: process.env.PG_CONNECTION_STRING
});

(async () => {
  await client('users').count('*').then(data => console.log(`Records before: ${data[0].count}`));
  await require('knex-cleaner').clean(client);
  await client('users').count('*').then(data => console.log(`Records after: ${data[0].count}`));
  client.destroy();
})();
