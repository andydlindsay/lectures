DROP TABLE IF EXISTS products;

CREATE TABLE products (
	id SERIAL PRIMARY KEY,
	product_name VARCHAR(50),
	price DECIMAL(5,2)
);

INSERT INTO products
  (product_name, price)
VALUES
  ('Capers - Pickled', 78.07),
  ('Pastry - Baked Scones - Mini', 8.24),
  ('Syrup - Monin - Passion Fruit', 66.27),
  ('Scallops - 20/30', 67.25),
  ('Wine - Duboeuf Beaujolais', 8.64);
