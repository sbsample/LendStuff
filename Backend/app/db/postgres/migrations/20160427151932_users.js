
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function(table){
      table.increments('uid').primary();
      table.string('username');
      table.string('password');
      table.string('email');
      table.timestamps();
    }),

    knex.schema.createTable('property', function(table){
      table.increments('id').primary();
      table.string('type');
      table.string('title');
      table.string('availability');
      table.integer('owner_id')
           .references('uid')
           .inTable('users');
      table.dateTime('postDate');
    }),

    knex.schema.createTable('loans', function(table){
      table.increments('id').primary();
      table.integer('lendee_id')
           .references('uid')
           .inTable('users');
      table.integer('owner_id')
           .references('uid')
           .inTable('users');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users'),
    knex.schema.dropTable('property'),
    knex.schema.dropTable('loans')
  ])
};
