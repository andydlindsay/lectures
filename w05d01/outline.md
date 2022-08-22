### External Resources
- [Users ERD](https://app.diagrams.net/#G1gV7Ji1pMqV0lRGgHs1BnfnpErSPsdAy_)
- [Albums and Songs](https://app.diagrams.net/#G1cEypc8OL99uiPDjQZdvClJ6W_0aT98wt)

### SELECT Challenges

For the first 6 queries, we'll be using the `users` table.

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
WHERE country = 'Canada' AND payment_due_date < '2020-11-23';

SELECT *
FROM users
WHERE country = 'Canada' AND payment_due_date < NOW();

SELECT *
FROM users
WHERE country = 'Canada' AND payment_due_date < CURRENT_DATE;
```

6. List all the countries users live in; don't repeat any countries (DISTINCT)

```sql
SELECT DISTINCT country
FROM users
ORDER BY country;
```

For the rest of the queries, we'll be using the `albums` and `songs` tables.

![albums and songs](https://andydlindsay-portfolio.s3.amazonaws.com/lighthouse/albums-and-songs.png)

7. List all albums along with their songs (INNER JOIN)

```sql
SELECT *
FROM albums
JOIN songs
ON albums.id = songs.album_id;
```

8. List all albums along with how many songs each album has (GROUP BY with INNER JOIN and COUNT)

```sql
SELECT albums.album_name, COUNT(songs.id) AS num_songs
FROM albums
JOIN songs
ON albums.id = songs.album_id
GROUP BY albums.album_name;
```

9. Enhance previous query to only include albums that have more than 10 songs (requires HAVING)

```sql
SELECT albums.album_name, COUNT(songs.id) AS num_songs
FROM albums
JOIN songs
ON albums.id = songs.album_id
GROUP BY albums.album_name
HAVING COUNT(songs.id) > 10;
```

10. List ALL albums in the database, along with their songs if any (need LEFT JOIN so that all albums are included)

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

11. List albums along with average song rating (AVG)

```sql
SELECT albums.album_name, AVG(songs.rating) AS avg_rating
FROM albums
JOIN songs
ON albums.id = songs.album_id
GROUP BY albums.album_name;
```

12. List albums and songs with rating higher than album average (subquery)

```sql
-- this query will calculate the avg of all songs in the table
SELECT AVG(rating) FROM songs;

-- this query will calculate the avg song rating for a particular album
SELECT AVG(rating) FROM songs WHERE album_id = 2;
```

```sql
-- this query will return album and song info for songs
-- whose rating is higher than a particular value
SELECT albums.album_name, albums.artist_name, songs.song_name, songs.rating
FROM albums
JOIN songs 
ON albums.id = songs.album_id
WHERE rating > 3;
```

```sql
-- now we substitute the query that returns an album average
-- for the hardcoded value in the second query
SELECT albums.album_name, albums.artist_name, songs.song_name, songs.rating
FROM albums
JOIN songs
ON albums.id = songs.album_id
WHERE rating > (SELECT AVG(rating) FROM songs WHERE album_id = albums.id);

-- showing the avg in the output
SELECT albums.album_name,
  songs.song_name,
  songs.rating,
  (SELECT AVG(songs.rating) FROM songs WHERE songs.album_id = albums.id) AS avg_rating
FROM albums
JOIN songs
ON albums.id = songs.album_id
WHERE rating > (SELECT AVG(rating) FROM songs WHERE album_id = albums.id);
```

### Useful Links
- [Top 10 Most Popular RDBMSs](https://www.c-sharpcorner.com/article/what-are-the-most-popular-relational-databases/)
- [Another Ranking of DBMSs](https://db-engines.com/en/ranking)
- [SELECT Queries Order of Execution](https://sqlbolt.com/lesson/select_queries_order_of_execution)
- [SQL Joins Visualizer](https://sql-joins.leopard.in.ua/)
