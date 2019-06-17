const express = require('express');
const router = express.Router();
const { getVillains, getVillainById, updateVillain, createVillain, deleteVillain } = require('../data-helpers/queries');

router.get('/villains', (request, response) => {
    getVillains((err, villains) => {
        if (err) {
            return response.render('error', { err });
        }
        response.render('index', { villains });
    });
});

router.get('/villains/new', (request, response) => {
    response.render('new-villain');
});

router.get('/villains/:id', (request, response) => {
    getVillainById(request.params.id, (err, villain) => {
        if (err) {
            return response.render('error', { err });
        }
        response.render('villain', { villain });
    });
});

router.post('/villains/:id', (request, response) => {
    updateVillain(request.params.id, request.body.name, (err) => {
        if (err) {
            return response.render('error', { err });
        }
        response.redirect(`/villains/${request.params.id}`);
    });
});

router.post('/villains', (request, response) => {
    const villain = request.body;
    createVillain(villain.name, villain.movie, (err) => {
        if (err) {
            return response.render('error', { err });
        }
        response.redirect('/villains');
    });
});

router.post('/villains/:id/delete', (request, response) => {
    deleteVillain(request.params.id, (err) => {
        if (err) {
            return response.render('error', { err });
        }
        response.redirect('/villains');
    });
});

module.exports = router;
