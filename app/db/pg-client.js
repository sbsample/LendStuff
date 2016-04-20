const pg = require('pg');

class PgClient {

  constructor() {
    this.conString = '';
    this.setConnectionString();
  }

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

module.exports = new PgClient();
