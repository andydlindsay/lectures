# W04D02 SQL from our Apps

### To Do
- [ ] Create a database and query it using `psql` terminal
- [ ] Perform `BREAD` actions on database from command line
- [ ] Perform `BREAD` actions on database from the browser

### node-postgres

We are going to use node-postgres (`pg`) node package to interact with our database.

In order to connect with our database, we need to pass configuration options to the `pg` client:

```js
const pg = require('pg');

const config = {
    user: '<user name>',
    password: '<password>',
    database: '<db>',
    host: '<host>'
};

const client = new pg.Client(config);
```

And we execute queries using the client:

```js
client.query('SELECT * FROM <table>', (err, data) => console.log(err, data);
```

**NOTE:** `pg` uses "error first" callbacks meaning that the first argument will always be the error (if any) or null and the subsequent arguments will be our data (if any).

### SQL Syntax Review

#### Browse

```sql
SELECT * FROM <table>;
```

#### Read

```sql
SELECT * FROM <table> WHERE id = <id>;
```

#### Edit

```sql
UPDATE <table> SET <column> = <value> WHERE id = <id>;
```

#### Add

```sql
INSERT INTO <table> (<column1>, <column2>) VALUES (<value1>, <value2>);
```

#### Delete

```sql
DELETE FROM <table> WHERE id = <id>;
```

### Useful Links
* [node-postgres](https://node-postgres.com/)
* [Postgres Numeric Data Types](https://www.postgresql.org/docs/11/datatype-numeric.html)
* [Little Bobby Tables](https://xkcd.com/327/)
