var express    = require('express');
var router     = express.Router();
var app        = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

router.post('/', function(req, res, next) {
  var sesh = req.session;
  var quest = sesh.quests[sesh.quests.length - 1];
  quest.friends = req.body.friends;

  res.render('dashboard', {
    layout: 'sidebar_layout' ,
    active: sesh.quests.filter(function (elem) { return elem.state === 'active'; }),
    pending: sesh.quests.filter(function (elem) { return elem.state === 'pending'; }),
    ignored: sesh.quests.filter(function (elem) { return elem.state === 'ignored'; }),
    completed: sesh.quests.filter(function (elem) { return elem.state === 'completed'; })
  });
});

module.exports = router;
