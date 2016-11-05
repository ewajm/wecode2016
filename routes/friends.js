var express    = require('express');
var router     = express.Router();
var app        = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

router.get('/', function(req, res, next) {
  res.render('friends' );
});

router.post('/', function(req, res, next) {
  var sesh = req.session;

  // make a quest from the stuff on the previous page...
  var quest = {
    activity: [],
    friends: [],
    leader: sesh.name ,
    hashtag: req.body.hashtag,
    start: req.body.start,
    type: req.body.quest,
    state: 'active'
  };

  //...and store it from the session
  sesh.quests ? sesh.quests.push(quest) : sesh.quests = [ quest ];

  //
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
