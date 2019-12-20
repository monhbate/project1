var express = require('express');
var router = express.Router();
var model=require('../model/index.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  model.connect(function(db){
	  db.collection('users').find().toArray(function(err,docs){
		  console.log('用户列表',docs)
		  res.render('index', { title: 'Express' });
	  })
  })
});

module.exports = router;
