/**
 * Module dependencies.
 */
const pg = require('pg');

/**
 * Postgres Client used for CRUD
 */
class PgClient {

/**
 * constring is the database connection string.
 */
  constructor() {
    this.conString = '';
    this.setConnectionString();
  }
/**
 * Checks to see what the development environment is an sets the connection string. 
 */
  setConnectionString(){
    if (process.env.NODE_ENV == "production") {
      this.conString = '';
    }
    else {
      this.conString = "postgres://ellis:password@localhost/books"
    }
  }

  connect(){
    pg.connect(this.conString, function(err, client, done) {
      if (err) {
        return console.error('error fetching client from pool', err);
      }
    })
  }

}

/**
 * Export new PgClient
 */
module.exports = new PgClient();
