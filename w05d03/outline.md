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
});
```

### demonstrate sql injection attack (recall tweeter string interpolation hack)
### demonstrate sanitization technique

# Second Half

### create a new directory called `web`

```bash
mkdir web
cd web
npm init -y
npm i express ejs morgan
touch server.js
```

```js
// get port from env
const port = process.env.PORT || 6789;

// server.js
app.set('view engine', 'ejs');

// middleware
app.use(morgan('dev'));

// routes
app.use('/', router);

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
```

### Create a directory called `db`
5. move database connection information into `db/db.js`
6. create a file called `queries.js` and build out the queries

```js
const db = require('./db');

module.exports = {  
  // browse
  getVillains: (cb) => {
    db.query('SELECT * FROM movie_villains ORDER BY id ASC', (err, data) => {
      return cb(err, data.rows);
    });
  }
};
```

7. create the `routes` directory

```js
const express = require('express');
const router = express.Router();

router.get('/villains', (request, response) => {
  getVillains((err, villains) => {
    if (err) {
      return response.render('error', { err });
    }
    response.render('index', { villains });
    });
});

module.exports = router;
```

8. create the `views` directory

```html
<!-- index.ejs -->
<body>
  <h1>All the best villains!</h1>
  <a href="/villains/new">Create New Villain</a>
  <% if (villains) { %>
    <ul>
      <% for (const villain of villains) { %>
        <li>
          <a href="/villains/<%= villain.id %>">
            <h4><%= `${villain.villain} from ${villain.movie} (${villain.id})` %></h4>
          </a>
        </li>
      <% } %>
    </ul>
  <% } %>
</body>

<!-- error.ejs -->
<% if (err) { %>
  <h2><%= err.status %></h2>
  <h2><%= err.stack %></h2>
<% } %>
```

9. refactor db credentials to use `dotenv`
