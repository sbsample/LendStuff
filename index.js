"use strict";
const express = require('express');
const app     = express();
const port    = 3000;

const users   = require('./app/controllers/users/user-ctrl.js')(express.Router());
// const   = require('.app/controllers/')
// const   = require('.app/controllers/')

app.use('/users', users);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})
