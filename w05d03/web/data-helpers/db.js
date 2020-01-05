const pg = require('pg');

const config = {
    user: 'movie_user',
    password: 'password',
    database: 'movies',
    host: 'localhost'
};

const client = new pg.Client(config);

client.connect();

module.exports = client;
