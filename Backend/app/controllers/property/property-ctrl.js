"use strict";

/**
 * Property routes.
 */

module.exports = (router) => {

router.route("/")
.get(function(res, req, next){
  res.send('View All property')
  // view all property
})

router.get('/new', function(req, res){
    res.send('Create New Property Form')
})
/**
 * Create route accepts the following parameters:
 * Title, description,
 * Route is used for creating a new propery.
 */
  router.post('/create', function(req, res) {
  // create new Property post route
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
