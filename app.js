const express = require('express');
const bookmarks = require('./routes/bookmarks');
const cors = require('cors');
const app = express();

//npm install cors. cors middleware attaches headers to the http response to let a browser know to accept cross origin data
app.use(cors());
app.use(express.json());
app.use('/bookmarks', bookmarks);

app.use('/*', (req, res) => {
  res.status(404).send('Not Found!');
});
module.exports = app;
