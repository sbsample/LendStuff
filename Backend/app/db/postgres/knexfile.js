
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'bookstesting',
      user:     'ellis',
      password: 'password'
    },
    pool: {
      min: 1,
      max: 2
    }
  },

  staging: {
    client: 'pg',
    connection: {
      database: 'booksstaging',
      user:     'ellis',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    }
  },

  production: {
    client: 'pg',
    connection: {
      database: 'books',
      user:     'ellis',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    }
  }

};
