"use strict";
var User = require('../../models/user/user-model.js');

/**
 * User routes.
 */

module.exports = (router) => {

router.get('/new', function(req, res){
  res.send('hello mellow -- from Docker World')
})
/**
 * Create route accepts the following parameters:
 * email, username, password
 * Route is used for creating a new account.
 */
  router.post('/create', (req, res) => {
    User.insert(req.body)
    res.send('cha ching')
  });

  router.get('/:username', (req, res) => {

  });
/**
 * Return router so that it can be used by express.
 */
  return router;
}
