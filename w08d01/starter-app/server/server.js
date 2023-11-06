const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 8001;

// middleware
app.use(morgan('dev'));

// routers
app.use('/api/parks', require('./routes/parkRouter'));

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
