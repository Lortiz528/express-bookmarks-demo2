const express = require('express');
const router = express.Router();
const bookmarks = require('../models/bookmarks');

router.use('/:id', (req, res, next) => {
  if (!bookmarks[req.params.id]) {
    res.status(404).send('Not Found');
  } else {
    next();
  }
});

// Index
router.get('/', (req, res) => {
  res.json(bookmarks);
});

// Show
router.get('/:id', (req, res) => {
  //console.log(req.params, bookmarks);
  res.json(bookmarks[req.params.id]);
});

// Create
router.post('/', (req, res) => {
  bookmarks.push(req.body);
  res.json(bookmarks[bookmarks.length - 1]);
});

// UPDATE
router.put('/:id', (req, res) => {
  // ?????
  const { id } = req.params;
  const newData = req.body;
  bookmarks[id] = newData;
  res.send(bookmarks[id]);
});

//DELETE
router.delete('/:id', (req, res) => {
  // ?????
  const { id } = req.params;
  //what do we do to bookmarks?
  bookmarks.splice(id, 1);
  res.send(bookmarks);
});

module.exports = router;
