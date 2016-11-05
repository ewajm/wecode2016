var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('twitter');
});

router.post('/fake-oauth', function(req, res, next) {
  res.render('twitter-fake-oauth');
});

module.exports = router;
