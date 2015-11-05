var express = require('express');
var router = express.Router();
var Player = require('../models/player.js');
var Firebase = require('firebase');

var database = new Firebase('https://intense-inferno-3591.firebaseio.com/');
/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/name', function(request, response){
    var player = new Player(request.body.name);
    // player.save();
    database.push({player: player});
});

database.on('value', function(snapshot) {
	var message = snapshot.val();
	console.log(snapshot.val());
});

module.exports = router;
