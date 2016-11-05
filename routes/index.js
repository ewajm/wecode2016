var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var sesh = req.session;

  sesh.quests = [
    {
      id: 1,
      hashtag: "active1",
      start_date: "11/04/2016",
      type: "weekly",
      leader: "Doctor Jane Goodall",
      friends: ["Doctor Curie", "Doctor Seuss"],
      activity: [
        {
          value: "Stood instead of sat",
          duration: "4",
          name: "Doctor Seuss"
        },
        {
          value: "Ran",
          duration: "3",
          name: "Doctor Curie"
        },
        {
          value: "Slept 8 or more hours",
          duration: "1",
          name: "Doctor Jane Goodall"
        }
      ],
      state: "active",
      hp: 10,
      current_hp: 5
    },
    {
      id: 2,
      hashtag: "pending1",
      start_date: "12/04/2016",
      type: "daily",
      leader: "Doctor Quinn Meidine Woman",
      friends: ["Doctor Zhivago", "Doctor Demento"],
      activity: [
      ],
      state: "pending",
      hp: 0,
      current_hp: 0
    },
    {
      id: 3,
      hashtag: "ignored1",
      start_date:"10/03/2016",
      type: "weekly",
      leader: "Doctor Demento",
      friends: [],
      activity: [
      ],
      state: "ignored",
      hp: 0,
      current_hp: 0
    },
    {
      id: 4,
      hashtag: "completed1",
      start_date: "09/08/2016",
      type: "daily",
      leader: "Doctor Zhivago",
      friends: ["Doctor Isley", "Doctor Quinn Medicine Woman"],
      activity: [
        {
          value: "Did yoga",
          duration: "4",
          name: "Doctor Isley"
        },
        {
          value: "Meditated",
          duration: "3",
          name: "Doctor Quinn Medicine Woman"
        },
        {
          value: "Cycled",
          duration: "4",
          name: "Doctor Zhivago"
        }
      ],
      state: "completed",
      hp: 10,
      current_hp: 8
    },
  ];

  res.render('index', { title: 'Defeating The Burrito Monster!' });

});

module.exports = router;
