var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	var db = req.db;
	db.collection('testimonials').find().toArray(function (err, items) {
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
    	db.collection('testimonials').find().toArray(function (err, items) {
        	res.render('testimonials', { "items" : items });
    	});
    });
});

router.put('/approve/:id', function(req, res) {
    var db = req.db;
    db.collection('testimonials').update({_id:req.params.id}, {'approved':'1'}, function(err) {
    	db.collection('testimonials').find().toArray(function (err, items) {
        	res.render('admin', { "items" : items });
    	});
    });
});

module.exports = router;
