var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('add', {layout: 'sidebar_layout'});
});

module.exports = router;
