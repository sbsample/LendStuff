"use strict"

/**
 * Loan routes.
 */

 module.exports = (router) => {

  router.route('/')
  .get(function(req, res, next){
    res.send("List all loans")
  })

  router.route('/new')
  .get(function(req, res, next){
    res.send('create new loan')
  })

  router.route('/:id')
  .get(function(req, res, next){
    res.send('find property by id name')
  })

  .put(function(req, res, next){
    res.send('alter loan')
  })

  .delete(function(req, res, next){
    res.send('delete loan')
  })

 }