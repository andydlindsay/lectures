# First Half

### Create a database on ElephantSQL and run one of the sql files

### Initialize npm and install the `pg` package

```bash
npm init -y
npm i pg
```

### Require and configure the Client

```js
const pg = require('pg');

const config = {
  user: 'movie_user',
  password: 'password',
  database: 'movies',
  host: 'localhost'
};

const client = new pg.Client(config);
```

### Connect to db and run a simple query

```js
client.connect();
client
  .query('SELECT * FROM movie_villains')
  .then((result) => {
    console.log(err, result)
  });
```

### Log connection message when connect resolves

```js
client
  .connect()
  .then(() => {
    console.log('connected to database');
  });
```

### Switch over the query type to execute BREAD operations

```js
switch (queryType) {
  case 'browse':
    client
      .query('SELECT * FROM movie_villains ORDER BY id ASC')
      .then((data) => {
        console.log(data.rows);
        client.end();
      });
    break;

  default:
    client.end();
    break;
}
```

### Demonstrate sql injection attack (recall tweeter string interpolation hack)
### Demonstrate sanitization technique

# Second Half

### Create a new directory called `web`

```bash
mkdir web
cd web
npm init -y
npm i express ejs morgan pg
touch server.js
```

```js
// server.js
const express = require('express');
const morgan = require('morgan');

const app = express();

// get port from env
const port = process.env.PORT || 6789;

// server.js
app.set('view engine', 'ejs');

// middleware
app.use(morgan('dev'));

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
```

### Create a directory called `db`

```js
// db/db.js
const pg = require('pg');
const Client = pg.Client;

const options = {
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS
};

const client = new Client(options);

client
  .connect()
  .then(() => {
    console.log(`connected to the database!!`);
  });

module.exports = client;
```

### Create a file called `queries.js` and build out the queries

```js
// db/villain-queries.js
const client = require('./client');

const getVillains = (cb) => {
  client
    .query('SELECT * FROM movie_villains')
    .then((result) => {
      cb(result.rows);
    });
};

const getVillainById = (id) => {
  return client
    .query('SELECT * FROM movie_villains WHERE id = $1', [id])
    .then(result => {
      return result.rows[0];
    });
};

module.exports = {
  getVillains,
  getVillainById
};
```

### Create the `routes` directory

```js
// routes/villain-router.js
const express = require('express');
const router = express.Router();
const { getVillains, getVillainById } = require('../db/queries');

router.get('/', (req, res) => {
  getVillains((villains) => {
    res.render('villains', { villains });
  });
});

router.get('/:id', (req, res) => {
  getVillainById(req.params.id)
    .then((villain) => {
      res.render('villain', { villain });
    });
});

module.exports = router;
```

### Create the `views` directory

```html
<!-- views/villains.ejs -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>All of our Villains</title>
</head>
<body>
  <h1>All the Villains!</h1>
  <% for (const villain of villains) { %>
    <h2>Villain: <%= villain.villain %> from <%= villain.movie %></h2>
  <% } %>
</body>
</html>
```

```html
<!-- views/villain.ejs -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Just one Villain!</title>
</head>
<body>
  <h2>One Villain! More than enough???</h2>
  <h2>Villain: <%= villain.villain %></h2>
  <h2>Movie: <%= villain.movie %></h2>
</body>
</html>
```

```html
<!-- views/error.ejs -->
<% if (err) { %>
  <h2><%= err.status %></h2>
  <h2><%= err.stack %></h2>
<% } %>
```

### Refactor db credentials to use `dotenv`

```js
const options = {
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS
};
```
