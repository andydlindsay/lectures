# W05D03 SQL from our Apps

### To Do
- [ ] Create a database and query it using `psql` terminal
- [ ] Perform `BREAD` actions on database from command line
- [ ] Demonstrate a SQL Injection attack
- [ ] Perform `BREAD` actions on database from the browser
- [ ] Protecting your secrets with Environment Variables

### node-postgres

We are going to use node-postgres (`pg`) node package to interact with our database.

In order to connect with our database, we pass configuration options to the `pg` client:

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

Then we tell our client to connect to the database and we execute queries using the client:

```js
client.connect();
client
  .query('SELECT * FROM <table>')
  .then((result) => console.log(result));
```

**NOTE:** When using callbacks instead of promises: `pg` uses "error first" callbacks meaning that the first argument will always be the error (if any) or null and the second argument will be the return value from our query.

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

### Sanitization

We always want to sanitize any user-defined parameters in our SQL before running the query to prevent possible [SQL injections](https://en.wikipedia.org/wiki/SQL_injection).

In `pg`, we use [prepared statements](https://en.wikipedia.org/wiki/Prepared_statement) and pass an array of values as the second argument to `client.query()`:

```js
client
  .query('SELECT * FROM <table> WHERE id = $1', [<id>])
  .then((result) => console.log(result));
```

In the above example, the `id` from the array will be interpolated into the SQL query wherever `$1` appears.

### Protecting Secrets with Environment Variables
* 

### Useful Links
* [node-postgres](https://node-postgres.com/)
* [Postgres Numeric Data Types](https://www.postgresql.org/docs/11/datatype-numeric.html)
* [Little Bobby Tables](https://xkcd.com/327/)
* [SQL Injection](https://en.wikipedia.org/wiki/SQL_injection)
