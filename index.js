const express = require('express');
const app = require('./app');
require('dotenv').config();

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
