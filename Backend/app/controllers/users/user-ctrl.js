"use strict";
var User = require('../../models/user/user-model.js');

/**
 * User routes.
 */

module.exports = (router) => {

router.route('/')
.get(function(req, res, next){
  res.send("List of all users" )
})

/**
 * Create route accepts the following parameters:
 * email, username, password
 * Route is used for creating a new account.
 */
 router.post('/create', function(req, res) {
   User.insert(req.body)
 });

  router.route('/:id')
  .get(function(req, res, next){

  })

  .put(function(req, res, next){

  })

  .delete(function(req, res, next){

  })

/**
 * Return router so that it can be used by express.
 */

  return router;
}