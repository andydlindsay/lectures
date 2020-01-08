DROP TABLE IF EXISTS cats;

CREATE TABLE cats (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  breed VARCHAR(50)
);

INSERT INTO cats 
  (name, breed)
VALUES
  ('Fred', 'Persian'),
  ('Joni', 'Maine Coon'),
  ('Tuna', 'Calico'),
  ('Precious', 'DSH');
