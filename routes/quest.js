var express = require('express');
var router = express.Router();

// router.get('/', function(req, res, next) {
//   res.render('twitter');
// });

router.post('/', function(req, res, next) {
  
  res.render('friends');
});

module.exports = router;
