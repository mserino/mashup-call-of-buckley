var Player = function(name) {
	this.name = name;
}

Player.prototype.name = {}

Player.prototype.save = function(){
	console.log("player saved");
}

module.exports = Player;