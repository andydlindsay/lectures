const db = require('./db');

module.exports = {
    
    // browse
    getVillains: (cb) => {
        db.query('SELECT * FROM movie_villains ORDER BY id ASC', (err, data) => {
            return cb(err, data.rows);
        });
    },

    // read
    getVillainById: (id, cb) => {
        db.query('SELECT * FROM movie_villains WHERE id = $1', [id], (err, data) => {
            return cb(err, data.rows);
        });
    },

    // edit
    updateVillain: (id, newName, cb) => {
        db.query('UPDATE movie_villains SET villain = $1 WHERE id = $2', [newName, id], (err, data) => {
            return cb(err, data);
        });
    },

    // add
    createVillain: (villain, movie, cb) => {
        db.query('INSERT INTO movie_villains (villain, movie) VALUES ($1, $2)', [villain, movie], (err, data) => {
            return cb(err, data);
        });
    },

    // delete
    deleteVillain: (id, cb) => {
        db.query('DELETE FROM movie_villains WHERE id = $1', [id], (err, data) => {
            return cb(err, data);
        });
    }

};
