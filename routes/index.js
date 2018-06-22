var express = require('express');
var router = express.Router();
var Question = require('../models/question')

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

router.post('/submitHistory', function(req, res, next) {
  res.render('home')
})

router.post('/submitTest', function(req, res, next) {
  res.render('home')
})

router.get('/home', function(req, res, next) {
  res.render('home')
});

router.get('/profile', function(req, res, next) {
  console.log("route to profile")
  res.render('profile')
})

router.get('/test', function(req, res, next) {
  let questions = []
  //Addition and subtraction
  for (let i = 0; i < 8; i++) {
    num1 = Math.floor(Math.random() * 501)
    num2 = Math.floor(Math.random() * 501)
    if (i < 4) {
      questions.push(new Question(num1, num2, num1 + num2))
    } else {
      questions.push(new Question(num1, num2, num1 - num2))
    }
  }
  //Multiplication
  for (let i = 0; i < 4; i++) {
    num1 = Math.floor(Math.random() * 31)
    num2 = Math.floor(Math.random() * 11)
    questions.push(new Question(num1, num2, num1 * num2))
  }
  console.log(questions)
  res.render('test', { questions: questions })
}) 



module.exports = router;
