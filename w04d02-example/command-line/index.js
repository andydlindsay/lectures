const pg = require('pg');

const config = {
    user: 'movie_user',
    password: 'password',
    database: 'movies',
    host: 'localhost'
};

const client = new pg.Client(config);
const queryType = process.argv.slice(2)[0];
let id = null;

client.connect((err) => {
    if (err) {
        console.error(err);
        return client.end();
    }

    console.log('connected to database');

    switch (queryType) {

        case 'browse':
            client.query('SELECT * FROM movie_villains ORDER BY id ASC', (err, data) => {
                if (err) {
                    console.error(err);
                    return false;
                }
                console.log(data.rows);
                client.end();
            });
            break;

        case 'read':
            id = process.argv.slice(2)[1];
            client.query('SELECT * FROM movie_villains WHERE id = $1', [id], (err, data) => {
                if (err) {
                    console.error(err);
                    return false;
                }
                console.log(data.rows);
                client.end();
            });
            break;

        case 'edit':
            id = process.argv.slice(2)[1];
            const newName = process.argv.slice(2)[2];
            client.query('UPDATE movie_villains SET villain = $1 WHERE id = $2', [newName, id], (err, data) => {
                if (err) {
                    console.error(err);
                    return false;
                }
                console.log(data.rows);
                client.end();
            });
            break;

        case 'add':
            const villain = process.argv.slice(2)[1];
            const movie = process.argv.slice(2)[2];
            client.query('INSERT INTO movie_villains (villain, movie) VALUES ($1, $2)', [villain, movie], (err) => {
                if (err) {
                    console.error(err);
                    return false;
                }
                console.log('record created!');
                client.end();
            });
            break;

        case 'delete':
            id = process.argv.slice(2)[1];
            client.query('DELETE FROM movie_villains WHERE id = $1', [id], (err) => {
                if (err) {
                    console.error(err);
                    return false;
                }
                console.log('record deleted!');
                client.end();
            });
            break;

        default:
            client.end();
            break;

    }
    
});
