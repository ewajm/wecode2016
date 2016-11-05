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

  res.render('dashboard', { layout: 'sidebar_layout' , quest: quest });
});

module.exports = router;
