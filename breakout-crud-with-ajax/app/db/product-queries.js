const db = require('./db');

const getProducts = () => {
  return db.query('SELECT * FROM products;')
    .then((response) => {
      return response.rows;
    });
};

const getProductById = (id) => {
  return db.query('SELECT * FROM products WHERE id = $1', [id])
    .then((response) => {
      return response.rows[0];
    });
};

const updateProduct = (id, productName, price) => {
  const query = `
    UPDATE products
    SET product_name = $1, price = $2
    WHERE id = $3;
  `;

  return db.query(query, [productName, price, id])
    .then(() => {
      return { success: true };
    });
};

const createProduct = (productName, price) => {
  const query = `INSERT INTO products(product_name, price) VALUES($1, $2);`;
  
  return db.query(query, [productName, price])
    .then(() => {
      return { success: true };
    });
};

const deleteProduct = (id) => {
  const query = `DELETE FROM products WHERE id = $1;`;

  return db.query(query, [id])
    .then(() => {
      return { success: true };
    });
};

module.exports = {
  getProducts,
  getProductById,
  updateProduct,
  createProduct,
  deleteProduct
};
