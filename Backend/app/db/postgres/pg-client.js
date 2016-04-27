"use strict";

var config = require('./knexfile.js');
var knex   = require('knex')(config['development']);

module.exports = knex;

knex.migrate.latest([config]);
