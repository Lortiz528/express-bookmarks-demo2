const express = require('express');
const bookmarks = require('./routes/bookmarks');
const app = express();

app.use(express.json());
app.use('/book-marks', bookmarks);
app.use('/*', (req, res) => {
  res.status(403).send('Not Found!');
});
module.exports = app;
