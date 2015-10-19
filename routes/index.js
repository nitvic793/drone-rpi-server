var express = require('express');
var router = express.Router();
var client = require('../Drone');

/* GET home page. Takes off and lands on  */
router.get('/', function(req, res, next) {
	client.takeoff();
	client.after(2000, function() {
		this.stop();
		this.land();
	});
	console.log("Take off and land");
    res.send("Take off and land");
 // res.render('index', { title: 'Express' });
});

router.get('/takeoff', function(req, res, next) {
	client.takeoff();
	console.log("Take off");	
    res.send({ title: 'Express' });
});

router.get('/land', function(req, res, next) {
	client.land();
	console.log("Take off");	
    res.send({ title: 'Express' });
});

router.get('/move', function(req, res, next) {
    var left,right,up,down,front,back,clockwise,counterClock;
    left = req.query['left'];
    right = req.query['right'];
    up = req.query['up'];
    down = req.query['down'];
    front = req.query['front'];
    back = req.query['back'];
    clockwise = req.query['cwise'];
    counterClock = req.query['ccwise'];
    var move = {
	left:left,
	right:right,
	up:up,
	down:down,
	front:front,
	back:back,
	cwise:clockwise,
	ccwise:counterClock}; 
    client.move(move);	
    res.send(move);
});


module.exports = router;
