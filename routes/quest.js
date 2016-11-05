var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('quest', { layout: 'sidebar_layout' });
});

router.post('/', function(req, res, next) {

  res.render('friends');
});

module.exports = router;

quests: [
  {
    id: 1,
    value: "dr_strange",
    name: "Doctor Strange"
  },
  {
    id: 2,
    value: "dr_who",
    name: "Doctor Who"
  },
