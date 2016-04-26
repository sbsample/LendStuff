"use strict";

/**
 * User routes.
 */

module.exports = (router) => {

router.route('/')
.get(function(req, res, next){
  res.send("List of all users" )
})

router.get('/new', function(req, res){
    res.send('hello world -- from Docker World')
})
/**
 * Create route accepts the following parameters:
 * email, username, password
 * Route is used for creating a new account.
 */
  router.post('/create', function(req, res) {

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
