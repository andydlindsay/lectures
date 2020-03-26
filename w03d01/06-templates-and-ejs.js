const express = require('express');
const app = express();
const port = 12345;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const templateVars = {
    message: 'hello there',
    username: 'Alice Bob Carol',
    age: 25
  };

  res.render('index', templateVars);
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
