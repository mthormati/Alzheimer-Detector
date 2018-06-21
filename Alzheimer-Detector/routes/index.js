var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '' });
});

router.post('/login', function(req, res, next) {
  //Get username with req.body.username
  //Get password with req.body.password

  //If user already exists in database then login
  //If user does not exist, add user to database and login

  return res.redirect('/home')
});

router.get('/home', function(req, res, next) {
  res.render('home')
});

module.exports = router;
