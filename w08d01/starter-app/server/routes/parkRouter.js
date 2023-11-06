const express = require('express');
const router = express.Router();

// data
const parks = require('../data/parks');
const reviews = require('../data/reviews');

// GET /api/parks
router.get('/', (req, res) => {
  const mappedParks = Object
    .values(parks)
    .map(park => ({
      id: park.id,
      name: park.name,
      location: park.location,
      averageReview: park.averageReview,
    }));

  res.json(mappedParks);
});

// GET /api/parks/:id
router.get('/:id', (req, res) => {
  res.json(parks[req.params.id]);
});

// GET /api/parks/:id/reviews
router.get('/:id/reviews', (req, res) => {
  const parkId = Number(req.params.id);
  const filteredReviews = reviews
    .filter(review => review.park_id === parkId);

  res.json(filteredReviews);
});

module.exports = router;
