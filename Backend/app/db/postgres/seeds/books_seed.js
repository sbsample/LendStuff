const faker = require('faker');

exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del()
      .then(function(){
        return knex('users').insert({
          username: faker.internet.userName(),
          email: faker.internet.email(),
          password: faker.internet.color()
        })
      })
      .then(function(){
        return knex('users').insert({
          username: faker.internet.userName(),
          email: faker.internet.email(),
          password: faker.internet.color()
        })
      })
      .then(function(){
        return knex('users').insert({
          username: faker.internet.userName(),
          email: faker.internet.email(),
          password: faker.internet.color()
        })
      })
      .then(function(){
        return knex('users').insert({
          username: faker.internet.userName(),
          email: faker.internet.email(),
          password: faker.internet.color()
        })
      })
      .then(function(){
        return knex('users').insert({
          username: faker.internet.userName(),
          email: faker.internet.email(),
          password: faker.internet.color()
        })
      })
  );
};
