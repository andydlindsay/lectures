const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// create Express app
const app = express();

// set the view engine to use ejs
app.set('view engine', 'ejs');

// setup morgan as the logger
app.use(morgan('dev'));

// add body-parser
app.use(bodyParser.urlencoded({ extended: false }));

// database
const resources = {
    'a4r': 'resource one',
    'yy7': 'resource two',
    '1p9': 'resource three',
};

// Browse
app.get('/resources', (req, res) => {
    const templateVars = {
        resources
    };
    res.render('index', templateVars);
});

// Read
app.get('/resources/:id', (req, res) => {
    const templateVars = {
        id: req.params.id,
        resource: resources[req.params.id]
    };
    res.render('resource', templateVars);
});

// Edit
app.post('/resources/:id', (req, res) => {
    resources[req.params.id] = req.body.resource;
    res.redirect(`/resources/${req.params.id}`);
});

// Add
app.post('/resources', (req, res) => {
    if (req.body.id) {
        resources[req.body.id] = req.body.resource;
    }
    res.redirect('/');
});

// Delete
app.post('/resources/:id/delete', (req, res) => {
    delete resources[req.params.id];
    res.redirect('/');
});

// catchall route
app.get('*', (req, res) => {
    res.redirect('/resources');
});

// start app listening on port 3000 for HTTP requests
app.listen(3000, () => {
    console.log('app is listening on port 3000');
});
