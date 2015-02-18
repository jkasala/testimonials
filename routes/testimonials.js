var express = require('express');
var ObjectID = require('mongoskin').ObjectID;
var router = express.Router();

router.get('/', function(req, res) {
	var db = req.db;
	db.collection('testimonials').find({approved:1}).toArray(function (err, items) {
        res.render('testimonials', { "items" : items });
    });
});

router.get('/admin', function(req, res) {
	var db = req.db;
	db.collection('testimonials').find().toArray(function (err, items) {
        res.render('admin', { "items" : items });
	});
});

router.post('/add', function(req, res) {
    var db = req.db;
    db.collection('testimonials').insert(req.body, function(err, result){
    	res.redirect('/testimonials/');
    });
});

router.post('/approve', function(req, res) {
    var db = req.db;
    var id = req.body.id;
    var approved = req.body.approved;
    db.collection('testimonials').update({_id:new ObjectID(id)}, {$set:{approved:(approved == 1 ? 0 : 1)}}, function(err) {
    	console.log(err);
		res.redirect('/testimonials/admin');
    });
});

module.exports = router;
