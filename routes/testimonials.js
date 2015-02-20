var express = require('express');
var ObjectID = require('mongoskin').ObjectID;
var moment = require('moment');
var router = express.Router();

router.get('/', function(req, res) {
	var db = req.db;
	db.collection('testimonials').find({approved:1}).toArray(function (err, items) {
		if(err) next(err);
        res.render('testimonials', { "items" : items });
    });
});

router.get('/admin', function(req, res) {
	var db = req.db;
	db.collection('testimonials').find().toArray(function (err, items) {
		if(err) next(err);
        res.render('admin', { "items" : items });
	});
});

router.post('/add', function(req, res) {
    var db = req.db;
    req.body.date = moment().format('MMMM Do YYYY, h:mm:ss a');
    db.collection('testimonials').insert(req.body, function(err, result){
    	if(err) next(err);
    	res.redirect('/testimonials');
    });
});

router.post('/approve', function(req, res) {
    var db = req.db;
    var id = req.body.id;
    var approved = req.body.approved;
    db.collection('testimonials').update({_id:new ObjectID(id)}, {$set:{approved:(approved == 1 ? 0 : 1)}}, function(err) {
    	if(err) next(err);
		res.redirect('/testimonials/admin');
    });
});

router.post('/delete', function(req, res) {
    var db = req.db;
    var id = req.body.id;
    db.collection('testimonials').remove({_id:new ObjectID(id)}, function(err) {
    	if(err) next(err);
		res.redirect('/testimonials/admin');
    });
});

module.exports = router;
