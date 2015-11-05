var Player = function(name) {
	this.name = name;
};

Player.prototype.name = {};

Player.prototype.save = function(player){
	database.push({player: player});
};

module.exports = Player;