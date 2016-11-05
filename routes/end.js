var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('end', {layout: 'sidebar_layout'});
});

module.exports = router;
