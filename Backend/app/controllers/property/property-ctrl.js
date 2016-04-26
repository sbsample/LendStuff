"use strict";

/**
 * Property routes.
 */

module.exports = (router) => {

router.get('/new', function(req, res){
    res.send('hello world -- from Docker World')
})
/**
 * Create route accepts the following parameters:
 * email, username, password
 * Route is used for creating a new propery.
 */
  router.post('/create', function(req, res) {

  });

  router.put('/:id',function(req, res){

  });

  router.delete('/:id', function(req, res){

  });

/**
 * Return router so that it can be used by express.
 */
  return router;
}
