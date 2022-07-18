const express = require('express');
const router = express.Router();
const bookmarks = require('../models/bookmarks');

// Index
router.get('/', (res) => {
  res.json(bookmarks);
});

// Show
router.get('/:id', (req, res) => {
  res.json(bookmarks[req.query.id]);
});

// Create
router.post('/', (req, res) => {
  bookmarks.push(req.body);
  res.json(bookmarks[bookmarks.length - 1]);
});

module.exports = router;
