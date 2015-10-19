var arDrone = require('ar-drone');
var client  = arDrone.createClient();

module.exports.takeoff = function(){
    client.takeoff();
}

module.exports.land = function(){
    client.stop();
    client.land();
}

module.exports.move = function(move){
    console.log(move);
    if(move.left){
	client.left(move.left);
	console.log(move.left);
    }
    if(move.left){
	client.left(move.left);
    }
    if(move.right){
	client.right(move.right);
    }
    if(move.up){
	client.up(move.up);
    }
    if(move.down){
	client.down(move.down);
    }
    if(move.front){
	client.front(move.front);
    }
    if(move.back){
	client.back(move.back);
    }
    if(move.left){
	client.left(move.left);
    }
    if(move.cwise){
	client.clockwise(move.cwise);
    }
    if(move.ccwise){
	client.counterClockwise(move.ccwise);
    }
}

