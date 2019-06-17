DROP TABLE IF EXISTS movie_villains;

CREATE TABLE movie_villains (
    id SERIAL PRIMARY KEY,
    villain VARCHAR(50),
    movie VARCHAR(50)
);

INSERT INTO movie_villains (villain, movie)
VALUES('Agent Smith', 'The Matrix');

INSERT INTO movie_villains (villain, movie)
VALUES('Voldemort', 'Harry Potter Series');

INSERT INTO movie_villains (villain, movie)
VALUES('Wicked Witch of the West', 'Wizard of Oz');

INSERT INTO movie_villains (villain, movie)
VALUES('Thanos', 'Avengers');
