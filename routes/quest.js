var express = require('express');
var router = express.Router();

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

  // FIXME|TODO look at the stuff that was posted and subtract the HP
  // and detect whether or not the monster has been killed
  // var activity = get_the_activity; // fixme
  // var duration = get_the_duration; // fixme
  // var damage   = activity * duration; // fixme
  quest.hp -= 50;

  var template = 'quest'; // reload the page by default
  if( quest.hp <= 0 ) { template = 'win'; } //
  res.render(template, { layout: 'sidebar_layout' , quest: quest, post: "posted"});
});

module.exports = router;
