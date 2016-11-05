var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('friends' );
});

router.post('/', function(req, res, next) {
  res.render('friends', {
    friends: [
      {
        id: 1,
        value: "dr_strange",
        name: "Doctor Strange"
      },
      {
        id: 2,
        value: "dr_crusher",
        name: "Doctor Crusher"
      },
      {
        id: 3,
        value: "dr_isley",
        name: "Doctor Isley"
      },
      {
        id: 4,
        value: "dr_demento",
        name: "Doctor Demento"
      },
      {
        id: 5,
        value: "dr_suess",
        name: "Doctor Seuss"
      },
      {
        id: 6,
        value: "dr_zhivago",
        name: "Doctor Zhivago"
      },
      {
        id: 7,
        value: "dr_goodall",
        name: "Doctor Jane Goodall"
      },
      {
        id: 8,
        value: "dr_curie",
        name: "Doctor Curie"
      },
      {
        id: 9,
        value: "dr_quinn_medicine_woman",
        name: "Doctor Quinn Medicine Woman"
      }
    ]
  });
});

module.exports = router;
