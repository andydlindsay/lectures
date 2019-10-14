# W5D1 - SQL Intro

### To Do
- [ ] Introduction to RDBMS
- [ ] The Relational Data Model (Tables, Columns, Rows)
- [ ] SELECT Statements
- [ ] Filtering, ordering, limiting, etc.
- [ ] Joining tables
- [ ] Grouping records
- [ ] Aggregate functions

### Relational Database Management System (RDBMS)
- A program that serves **and** controls interactions with one or more _Relational Databases_
- Communicates using a custom protocol (eg. `postgres://` for postgres) that sits on top of TCP
- Front End <-----`http`-----> Back End <-----`postgres`-----> RDBMS

### Structured Data
- The **S** in **SQL** is for _structured_. This means that our data must conform to a _structure_ in order to store it in the database.
- The data itself is stored in **tables**
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

### JOIN
- We connect tables together using **JOIN**s
- The tables are joined together using the primary key and foreign key
- There are various types of joins:
  - `INNER JOIN`: The default. Return only records that have matching records in the other table.
  - `LEFT JOIN`: Return all records from the "left" table and only those from the other table that match.
  - `RIGHT JOIN`: The same as a _LEFT JOIN_, but from the _RIGHT_ instead.
  - `LEFT OUTER JOIN`: Return only records from the first table that don't match anything in the second table.
  - `RIGHT OUTER JOIN`: The same as _LEFT OUTER JOIN_, but from the _RIGHT_ instead.
  - `FULL OUTER JOIN`: Return only records from both tables that have no matches in the other table.

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

### SELECT Challenges

1. Retrieve a specific record or records from a table that match a criteria.

```sql

```

2. Order results by a certain field or fields.

```sql

```

3. Limit the number of results returned by the query.

```sql

```

4. Join one table with another table and amalgamate the records.

```sql

```

5. Return all records from one table and only those that match from a second table.

```sql

```

6. Group records together on common values.

```sql

```

7. Aggregation queries.

```sql

```

### Useful Links
- [Top 10 Most Popular RDBMSs](https://www.c-sharpcorner.com/article/what-are-the-most-popular-relational-databases/)
- []()
