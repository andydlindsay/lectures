const express = require('express');
const router = express.Router();
const {
  getBreads,
  getBreadById,
  updateBreadStyle,
  replaceBread,
  createBread,
  deleteBread
} = require('../data/queries');

router.get('/', (req, res) => {
  const breads = getBreads();
  res.json(breads);
});

router.get('/:id', (req, res) => {
  const bread = getBreadById(req.params.id);
  res.json(bread);
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const { style } = req.body;
  updateBreadStyle(id, style);
  res.json('Bread updated successfully');
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { style, description } = req.body;
  replaceBread(id, style, description);
  res.json('Bread replaced successfully');
});

router.post('/', (req, res) => {
  const { style, description } = req.body;
  createBread(style, description);
  res.json('Bread created successfully');
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  deleteBread(id);
  res.json('Bread deleted successfully');
});

module.exports = router;
