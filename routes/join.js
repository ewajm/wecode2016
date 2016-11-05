var express = require('express');
var router = express.Router();
var app=express();
var bodyParser= require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

router.post('/', function(req, res, next) {
   var name = req.body.formWelcomeName;
   res.render('join', {
     name: name
   });
});

module.exports = router;
