# W5D1 - SQL Intro

### To Do
- [ ] Introduction to RDBMS
- [ ] The Relational Data Model (Tables, Columns, Rows)
- [ ] `SELECT` Statements
- [ ] Filtering and ordering
- [ ] Joining tables
- [ ] Grouping records
- [ ] Aggregation functions
- [ ] `LIMIT` and `OFFSET`

### Relational Database Management System (RDBMS)
- A program that serves, **and** controls interactions with, one or more _Relational Databases_
- Communicates using a custom protocol (eg. `postgres://` for postgres) that sits on top of TCP
- Front End <-----`http` + `tcp`-----> Back End <-----`postgres` + `tcp`-----> RDBMS

### Structured Data
- The **S** in **SQL** is for _structured_. This means that our data must conform to a _structure_ in order to store it in the database.
- The data itself is stored in **tables** which define things such as field names, data types, and other data constraints
- You are probably familiar with tables already if you've used programs like Excel or Calc
- Tables are made up of **columns** and **rows**
  - Columns are called `fields`
  - Rows are called `records`
- Each table describes an entity (eg. `users`, `products`, `shifts`, `tweets`)
  - The fields represent properties of the entity
  - Each record represents one unique entity

### Primary Keys
- In order to reference a particular record in a table, each one is given a unique identifier we call a **Primary Key**
- Other tables can then make reference to a particular record in another table by storing the Primary Keys value
- We call a Primary Key stored in another table a **Foreign Key**
- It is through this Primary Key/Foreign Key relationship that our tables are _related_ to one another

### SELECT
- The **SELECT** clause queries the database and returns records that match the query
- Always accompanied by the **FROM** keyword which indicates which table we'd like to query
- SELECT takes a list of field names as an argument
- Every SQL command ends in a semicolon (;), that's how we tell the application that we are finished entering our query

```sql
-- basic SELECT query
SELECT username, email FROM users;

-- the asterisk (*) can be used as a wildcard to return all fields in the table
SELECT * FROM users;

-- it is customary to put each SQL clause or keyword on a separate line for readability
SELECT username, email
FROM users;
```

### Filtering and Ordering
- We use `WHERE` to filter our results
- If the record satisfies the `WHERE` criteria (eg. before a certain date, greater than a certain amount), it is included in the query results
- NOTE: using the `WHERE` clause can filter your records down to zero (ie. no records satisfy the filter criteria)

```sql
SELECT *
FROM table_one
-- return only records where date_due is before the current date
WHERE date_due < NOW();
```

- Order your results with the `ORDER BY` clause
- We specify the field that we want to sort by and the sort direction
- Sort direction is either ascending (`ASC`) or descending (`DESC`)
- NOTE: the default sort direction is ascending (`ASC`) so you don't need to specify it

```sql
SELECT *
FROM table_one
ORDER BY field_one;

-- or in descending order
ORDER BY field_one DESC;
```

### `JOIN`
- We connect tables together using **JOIN**s
- The tables are joined together using the primary key and foreign key
- There are various types of joins:
  - `INNER JOIN`: The default. Return only records that have matching records in the other table
  - `LEFT JOIN`: Return all records from the "left" table and only those from the other table that match
  - `RIGHT JOIN`: The same as a _LEFT JOIN_, but from the _RIGHT_ instead
  - `FULL OUTER JOIN`: Return all records from both tables

```sql
-- basic INNER JOIN
SELECT *
FROM table_one
INNER JOIN table_two
ON table_one.id = table_two.table_one_id;

-- since it is the default, you don't have to specify "INNER"
SELECT *
FROM table_one
JOIN table_two
ON table_one.id = table_two.table_one_id;
```

### Grouping Records
- Records that contain the same values (eg. **students** with the same `cohort_id`) can be _grouped_ together using the `GROUP BY` clause
- If the records contain any unique values, they will not be grouped together

```sql
SELECT cohort_id, COUNT(cohort_id) AS num_students
FROM students
GROUP BY cohort_id;
```

### Aggregation Functions
- Aggregation functions give us meta data about our records (eg. count responses, average player score, get minimum value)
- Some aggregation functions:

| Function | Purpose | Example Usage
| :-- | :-- | :-- |
| `COUNT` | Return the number of records grouped together | `COUNT(*) as num_users` |
| `SUM` | Add the values of the specified field together | `SUM(player_score) AS total_score` |
| `MIN` | Return the minimum value from the field | `MIN(player_score) AS lowest_score` |
| `MAX` | Return the maximum value | `MAX(player_score) AS high_score` |
| `AVG` | Return the average value | `AVG(player_score) AS average_score` |

### `LIMIT` and `OFFSET`
- We can limit the amount of records returned from a query using `LIMIT`
- `LIMIT` accepts an _integer_ as an argument

```sql
SELECT *
FROM table_one
-- only return 50 records
LIMIT 50;
```

- NOTE: `LIMIT` runs **after** `ORDER BY` (ie. sort your records then specify how many to return)

```sql
SELECT *
FROM table_one
-- order by a field(s)
ORDER BY field_name DESC
-- return the top 10
LIMIT 10;
```

- We can skip any number of records using `OFFSET`
- Like `LIMIT`, `OFFSET` accepts an _integer_ as an argument

```sql
SELECT *
FROM table_one
-- skip the first 10 records
OFFSET 10;
```

- `OFFSET` and `LIMIT` work hand-in-hand to create [pagination](https://en.wikipedia.org/wiki/Pagination)

```sql
SELECT *
FROM table_one
-- skip the first 20 records, return the next 10
LIMIT 10 OFFSET 20;

-- you can specify these in any order
OFFSET 20 LIMIT 10;
```

### SELECT Challenges

For the first 5 queries, we'll be using the `users` table.

![users table](https://andydlindsay-portfolio.s3.amazonaws.com/lighthouse/w5d1-users.io.png)

1. List total number of users (COUNT)

```sql
SELECT COUNT(*)
FROM users;
```

2. List users over the age of 18 (single-table; WHERE)

```sql
SELECT *
FROM users
WHERE age > 18;
```

3. List users who are over the age of 18 and have the last name Barrows (single-table; WHERE with AND)

```sql
SELECT *
FROM users
WHERE age > 18
AND last_name = 'Barrows';
```

4. List users over the age of 18 who live in Canada sorted by age from oldest to youngest and then last name alphabetically (WHERE, AND, ORDER BY)

```sql
SELECT *
FROM users
WHERE age > 18
AND country = 'Canada'
ORDER BY age DESC, last_name ASC;
```

5. List users who live in Canada and whose accounts are overdue (single-table; WHERE with AND; date comparison)

```sql
SELECT *
FROM users
WHERE country = 'Canada'
AND payment_due_date < '2019-10-14';

-- we can also use the SQL function NOW() to refer to the current time
SELECT *
FROM users
WHERE country = 'Canada'
AND payment_due_date < NOW();
```

For the rest of the queries, we'll be using the `albums` and `songs` tables.

![albums and songs](https://andydlindsay-portfolio.s3.amazonaws.com/lighthouse/albums-and-songs.png)

6. List all albums along with their songs (INNER JOIN)

```sql
SELECT *
FROM albums
JOIN songs
ON albums.id = songs.album_id;
```
7. List all albums along with how many songs each album has (GROUP BY with INNER JOIN and COUNT)

```sql
SELECT albums.album_name, COUNT(songs.id) AS num_songs
FROM albums
JOIN songs
ON albums.id = songs.album_id
GROUP BY albums.album_name;
```

8. Enhance previous query to only include albums that have more than 10 songs (requires HAVING)

```sql
SELECT albums.album_name, COUNT(songs.id) AS num_songs
FROM albums
JOIN songs
ON albums.id = songs.album_id
GROUP BY albums.album_name
HAVING COUNT(songs.id) > 10;
```

9. List ALL albums in the database, along with their songs if any (need LEFT JOIN so that all albums are included)

```sql
SELECT *
FROM albums
LEFT JOIN songs
ON albums.id = songs.album_id;

-- we can also see just the albums with no songs by specifying that songs.album_id must be null
SELECT *
FROM albums
LEFT JOIN songs
ON albums.id = songs.album_id
WHERE songs.album_id IS NULL;
```

10. List albums along with average song rating (AVG)

```sql
SELECT albums.album_name, AVG(songs.rating) AS avg_rating
FROM albums
JOIN songs
ON albums.id = songs.album_id
GROUP BY albums.album_name;
```

11. List albums and songs with rating higher than album average (subquery)

```sql
SELECT albums.album_name,
  songs.song_name,
  songs.rating,
  (SELECT AVG(songs.rating) FROM songs WHERE songs.album_id = albums.id) AS avg_rating
FROM albums
JOIN songs
ON albums.id = songs.album_id
WHERE songs.rating > (SELECT AVG(songs.rating) FROM songs WHERE songs.album_id = albums.id);
```

### Useful Links
- [Top 10 Most Popular RDBMSs](https://www.c-sharpcorner.com/article/what-are-the-most-popular-relational-databases/)
- [Another Ranking of DBMSs](https://db-engines.com/en/ranking)
- [SELECT Queries Order of Execution](https://sqlbolt.com/lesson/select_queries_order_of_execution)
- [SQL Joins Visualizer](https://sql-joins.leopard.in.ua/)
