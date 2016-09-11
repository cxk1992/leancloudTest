'use strict';
var router = require('express').Router();
var AV = require('leanengine');

var Object = AV.Object.extend('defaultClassName');

router.get('/', function(req, res, next) {
	console.log('get add');
	res.render('add');
})

router.post('/',function(req,res,next){
	var name = req.body.name;
	var age = req.body.age;
	console.log(name);
	console.log('add request name = ' + name + ' age = '+ age);
	var obj = new Object();
	obj.set('name',name);
	obj.set('age',age);
	obj.save().then(function(add){
		console.log(add);
		res.redirect('/record');
	}).catch(next);
})

module.exports = router;