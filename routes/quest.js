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
  var displayHp = parseInt(quest.hp);
  if(quest.activity){
    quest.activity.forEach(function(a){
      displayHp-= (parseInt(a.duration) * 10);
    });
  }
  
  res.render('quest', {
    layout: 'sidebar_layout' ,
    quest: quest,
    displayHp: displayHp,
    activities: quest.activity,
    active: sesh.quests.filter(function (elem) { return elem.state === 'active'; }),
    pending: sesh.quests.filter(function (elem) { return elem.state === 'pending'; }),
    ignored: sesh.quests.filter(function (elem) { return elem.state === 'ignored'; }),
    completed: sesh.quests.filter(function (elem) { return elem.state === 'completed'; })
  });
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
  res.render(template, { layout: 'sidebar_layout' , quest: quest, });
  if( quest.hp <= 0 ) { template = 'win'; } //
  res.render(template, {
    layout: 'sidebar_layout' ,
    quest: quest,
    displayHp: displayHp,
    activities: quest.activity,
    active: sesh.quests.filter(function (elem) { return elem.state === 'active'; }),
    pending: sesh.quests.filter(function (elem) { return elem.state === 'pending'; }),
    ignored: sesh.quests.filter(function (elem) { return elem.state === 'ignored'; }),
    completed: sesh.quests.filter(function (elem) { return elem.state === 'completed'; })
  });
});

module.exports = router;
