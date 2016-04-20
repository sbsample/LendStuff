"use strict";
const express = require('express');
const app     = express();
const port    = 1337;

const users   = require('../controllers/users/user-ctrl.js')(express.Router());
// const   = require('.app/controllers/')
// const   = require('.app/controllers/')

app.use('/users', users);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})

module.exports = app;
