"use strict";
var postgres = require('../../db/postgres/pg-client.js');

class User {
  constructor(){

  }

  insert(newUser){
    postgres('users').insert(newUser);
  }

  exists(params){

  }

}

module.exports = new User();
