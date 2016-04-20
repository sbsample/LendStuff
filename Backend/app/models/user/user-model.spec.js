const mocha     = require('mocha');
const chai      = require('chai');
const User      = require('./user-model.js');

describe('UserModel', () => {
  describe('#exists', () => {
    it('should take a set of parameters', () => {
      User.exists({'email': 'ellis@gmail.com', 'username': 'ellis', 'password': 'password'})
    })
  })
})
