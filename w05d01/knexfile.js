require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    connection: process.env.PG_CONNECTION_STRING,
    migrations: {
      directory: __dirname + '/Migrations',
    },
    seeds: {
      directory: __dirname + '/seeds'
    }
  },

};
