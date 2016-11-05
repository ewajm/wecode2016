var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var index     = require('./routes/index');
var twitter   = require('./routes/twitter');
var join      = require('./routes/join');
var pick      = require('./routes/pick');
var friends   = require('./routes/friends');
var dashboard = require('./routes/dashboard');
var quest     = require('./routes/quest');
var add       = require('./routes/add');
var end       = require('./routes/end');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

// routes
app.use('/', index);
app.use('/twitter', twitter);
app.use('/join', join);
app.use('/twitter', twitter);
app.use('/pick', pick);
app.use('/friends', friends);
app.use('/dashboard', dashboard);
app.use('/quest', quest);
app.use('/add', add);
app.use('/end', end);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

// quests: [
//   {
//     id: 1,
//     hashtag: "#active1",
//     start_date: "11/04/2016",
//     type: "weekly",
//     leader: "Doctor Jane Goodall",
//     friends: ["Doctor Curie", "Doctor Seuss"],
//     activity: [
//       {
//         value: "Stood instead of sat",
//         duration: "4",
//         name: "Doctor Seuss"
//       },
//       {
//         value: "Ran",
//         duration: "3",
//         name: "Doctor Curie"
//       },
//       {
//         value: "Slept 8 or more hours",
//         duration: "1",
//         name: "Doctor Jane Goodall"
//       }
//     ],
//     state: "active",
//     hp: 10,
//     current_hp: 5
//   },
//   {
//     id: 2,
//     hashtag: "#pending1",
//     start_date: "12/04/2016",
//     type: "daily",
//     leader: "Doctor Quinn Meidine Woman",
//     friends: ["Doctor Zhivago", "Doctor Demento"],
//     activity: [
//     ],
//     state: "pending",
//     hp: 0,
//     current_hp: 0
//   },
//   {
//     id: 3,
//     hashtag: "#ignored1",
//     start_date:"10/03/2016",
//     type: "weekly",
//     leader: "Doctor Demento",
//     friends: [],
//     activity: [
//     ],
//     state: "ignored",
//     hp: 0,
//     current_hp: 0
//   },
//   {
//     id: 4,
//     hashtag: "#completed1",
//     start_date: "09/08/2016",
//     type: "daily",
//     leader: "Doctor Zhivago",
//     friends: ["Doctor Isley", "Doctor Quinn Medicine Woman"],
//     activity: [
//       {
//         value: "Did yoga",
//         duration: "4",
//         name: "Doctor Isley"
//       },
//       {
//         value: "Meditated",
//         duration: "3",
//         name: "Doctor Quinn Medicine Woman"
//       },
//       {
//         value: "Cycled",
//         duration: "4",
//         name: "Doctor Zhivago"
//       }
//     ],
//     state: "completed",
//     hp: 10,
//     current_hp: 8
//   },
// ]
