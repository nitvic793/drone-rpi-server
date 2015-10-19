var express = require('express');
var router = express.Router();
var arDrone = require('ar-drone');
var client  = arDrone.createClient();

/* GET home page. Takes off and lands on  */
router.get('/', function(req, res, next) {
	client.takeoff();
	client.after(2000, function() {
		this.stop();
		this.land();
	});
	console.log("Take off and land");	
  res.render('index', { title: 'Express' });
});

router.get('/takeoff', function(req, res, next) {
	client.takeoff();
	console.log("Take off");	
  res.render('index', { title: 'Express' });
});

router.get('/land', function(req, res, next) {
	client.land();
	console.log("Take off");	
  res.render('index', { title: 'Express' });
});



module.exports = router;
