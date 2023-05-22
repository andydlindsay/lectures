const express = require('express');
const router = express.Router();
const productQueries = require('../database/productQueries');

// GET /api/products
router.get('/', (req, res) => {
  productQueries.getProducts()
    .then((products) => {
      res.json(products);
    });
});

// GET /api/products/:id
router.get('/:id', (req, res) => {
  productQueries.getProductById(req.params.id)
    .then((product) => {
      res.json(product);
    });
});

// POST /api/products
router.post('/', (req, res) => {
  const {productName, price} = req.body;
  productQueries.createProduct(productName, price)
    .then(() => {
      res.json({ success: true });
    });
});

// PATCH /api/products/:id
router.patch('/:id', (req, res) => {
  const {productName, price} = req.body;
  productQueries.updateProduct(req.params.id, productName, price)
    .then(() => {
      res.json({ success: true });
    });
});

// DELETE /api/products/:id
router.delete('/:id', (req, res) => {
  productQueries.deleteProduct(req.params.id)
    .then(() => {
      res.json({ success: true });
    });
});

module.exports = router;
