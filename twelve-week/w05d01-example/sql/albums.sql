DROP TABLE IF EXISTS albums;
DROP TABLE IF EXISTS songs;

CREATE TABLE albums (
  id SERIAL PRIMARY KEY,
  album_name VARCHAR(50),
  artist_name VARCHAR(50),
  release_date DATE
);

CREATE TABLE songs (
  id SERIAL PRIMARY KEY,
  album_id INT REFERENCES albums(id),
  track_number SMALLINT,
  song_name VARCHAR(50),
  rating FLOAT
);

INSERT INTO albums (album_name, artist_name, release_date)
VALUES  ('Homecoming: The Live Album', 'Beyonce', 'April 17, 2019'),
        ('On the Line', 'Jenny Lewis', 'March 22, 2019'),
        ('thank u, next', 'Ariana Grande', 'February 8, 2019'),
        ('the underrated youth', 'Yungblud', 'October 18, 2019');

INSERT INTO songs (album_id, track_number, song_name, rating)
VALUES  (1, 1, 'Welcome', 2.5),
        (1, 2, 'Crazy in Love', 4),
        (1, 3, 'Freedom', 4),
        (1, 4, 'Lift Every Voice and Sing', 3.5),
        (1, 5, 'Formation', 4.5),
        (1, 6, 'So Much Damn Swag', 3),
        (1, 7, 'Sorry', 2),
        (1, 8, 'Kitty Kat', 4),
        (1, 9, 'Bow Down', 3),
        (1, 10, 'I Been On', 4.5),
        (1, 11, 'Drunk in Love', 4),
        (2, 1, 'Heads Gonna Roll', 2.5),
        (2, 2, 'Wasted Youth', 4),
        (2, 3, 'Red Bull & Hennessy', 4),
        (2, 4, 'Hollywood Lawn', 3.5),
        (2, 5, 'Do Si Do', 3),
        (2, 6, 'Dogwood', 3.5),
        (2, 7, 'Party Clown', 4),
        (2, 8, 'Little White Dove', 3),
        (2, 9, 'Taffy', 4.5),
        (2, 10, 'On the Line', 4),
        (2, 11, 'Rabbit Hole', 3.5),
        (3, 1, 'imagine', 4),
        (3, 2, 'needy', 3.5),
        (3, 3, 'NASA', 4),
        (3, 4, 'bloodline', 3.5),
        (3, 5, 'fake smile', 4),
        (3, 6, 'bad idea', 4.5),
        (3, 7, 'make up', 3.5),
        (3, 8, 'ghostin', 2.5),
        (3, 9, 'in my head', 3.5),
        (3, 10, '7 rings', 4.5),
        (3, 11, 'thank you, next', 2);
