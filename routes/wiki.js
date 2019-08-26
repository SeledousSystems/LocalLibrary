//wiki.js wiki route module 

var express = require('express');
var router = express.Router();

//home page route.
router.get('/', function(req, res) {
	res.send('Wiki home page');
})

//ABout page route.
router.get('/about', function(req, res) {
	res.send('About this wiki'); 
})

module.exports = router;

