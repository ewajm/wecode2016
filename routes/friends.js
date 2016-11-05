var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  // have code here to fetch friends list from twitter
  res.render('friends', {
    friends: [
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
      {
        id: 3,
        value: "dr_welby",
        name: "Doctor Marcus Welby MD"
      },
      {
        id: 4,
        value: "dr_demento",
        name: "Doctor Demento"
      },
      {
        id: 5,
        value: "dr_suess",
        name: "Doctor Suess"
      },
      {
        id: 6,
        value: "dr_zhivago",
        name: "Doctor Zhivago"
      },
      {
        id: 7,
        value: "dr_frankenstein",
        name: "Doctor Frankenstein"
      },
      {
        id: 8,
        value: "dr_curie",
        name: "Doctor Curie"
      },
      {
        id: 9,
        value: "dr_jekyll",
        name: "Doctor Jekyll"
      }
    ]
  });
});

module.exports = router;
