const express = require('express');

const app = express();

// static path for public folder
app.use(express.static('public'));

app.listen(3000, () => {
    console.log('app is listening on port 3000');
});
