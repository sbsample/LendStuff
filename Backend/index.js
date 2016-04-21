"use strict";

/**
 * Module dependencies.
 */
const express = require('express');
const app     = express();
const port    = 3000;

/**
 * Imported routes.
 */
const users   = require('./app/controllers/users/user-ctrl.js')(express.Router());
// const   = require('.app/controllers/')
// const   = require('.app/controllers/')

/**
 * Mounted routes. 
 */
app.use('/users', users);

/**
 * Server listening on variable port. 
 */
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})
