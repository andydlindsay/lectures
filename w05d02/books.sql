DROP TABLE IF EXISTS books;

CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  author_name VARCHAR(50),
  book_name VARCHAR(50),
  publisher VARCHAR(50),
  publication_date DATE,
  number_of_pages SMALLINT
);
