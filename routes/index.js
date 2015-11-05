var express = require('express');
var router = express.Router();
var Player = require('../models/player.js');

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(request, response){
    var player = new Player(request.body.name)
    player.save();
});

module.exports = router;
