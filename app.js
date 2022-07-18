const express = require('express');
const bookmarks = require('./routes/bookmarks');
const app = express();

app.use(express.json());
app.use('/*', (req, res) => {
  res.status(403).send('Not Found!');
});
app.use('/bookmarks', bookmarks);

module.exports = app;
