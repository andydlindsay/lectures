### First Half

1. log into `psql` and create a database called `villains` and connect to it

```sql
CREATE DATABASE villains;
\c villains;
\! clear -- clear the terminal or cmd + d
```

2. use `\i` to include the `villains.sql`
3. create a new user `villains_user` and give them appropriate permissions and a password

```sql
CREATE USER villains_user;
GRANT ALL PRIVILEGES ON DATABASE villains TO villains_user;
GRANT ALL PRIVILEGES ON TABLE villains TO villains_user;
ALTER DATABASE villains OWNER TO villains_user;
ALTER TABLE villains OWNER TO villains_user;
ALTER USER villains_user WITH ENCRYPTED PASSWORD 'password';
```

4. initialize npm and install the `pg` package

```bash
npm init -y
npm i pg
```

```js
const pg = require('pg');

const config = {
  user: 'movie_user',
  password: 'password',
  database: 'movies',
  host: 'localhost'
};

const client = new pg.Client(config);

client.connect();
client.query('SELECT * FROM movie_villains', (err, result) => console.log(err, result));
```

```js
client.connect((err) => {
  if (err) {
    console.error(err);
    return client.end();
  }

  console.log('connected to database');

  switch (queryType) {
    case 'browse':
      client.query('SELECT * FROM movie_villains ORDER BY id ASC', (err, data) => {
        if (err) throw err;
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

5. demonstrate sql injection attack (recall tweeter string interpolation hack)
6. demonstrate sanitization technique

### Second Half

1. create a new directory called `web`
2. `npm init` and then install `express morgan body-parser ejs`
3. create `server.js` and check if app works

```js
// server.js
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

// routes
app.use('/', router);

app.listen(3000, () => {
  console.log('app is listening on port 3000');
});
```

4. create a directory called `db`
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
