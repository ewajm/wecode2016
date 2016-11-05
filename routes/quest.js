var express = require('express');
var router = express.Router();
var app=express();
var bodyParser= require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


router.get('/:quest', function(req, res, next) {
  function rightQuest (elem) { return elem.hashtag === req.params.quest; }

  var sesh = req.session;

  var quest = req.session.quests.find(rightQuest);

  res.render('quest', { layout: 'sidebar_layout' , quest: quest});
});

router.post('/:quest', function(req, res, next) {
  function rightQuest (elem) { return elem.hashtag === req.params.quest; }

  var sesh = req.session;

  var quest = req.session.quests.find(rightQuest);
  var activity = {
    value: req.body.activity,
    duration: req.body.duration,
    name: sesh.name
  }
  quest.activity.push(activity);
  var displayHp = parseInt(quest.hp);
  quest.activity.forEach(function(a){
    displayHp-= (parseInt(a.duration) * 10);
  });

  var template = 'quest'; // reload the page by default
  if( displayHp <= 0 ) { template = 'win'; } //
  res.render(template, { layout: 'sidebar_layout' , quest: quest, displayHp: displayHp, activities: quest.activity});
});

module.exports = router;
