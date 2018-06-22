var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var hbs = require("hbs");

hbs.registerPartial('question', '<div class="mt-3 mb-2"><b>Question {{inc @index}}</b></div><div class="row"><div class="ml-3" style="width: 80px; padding-top: 10px">{{num1}} {{sign @index}} {{num2}} = </div><div class="pl-2"><div class="md-form m-0"><input placeholder="Answer" name="answer-{{@index}}" type="text" id="form1" class="form-control"></div></div></div>')
hbs.registerHelper("inc", function(value, options)
{
    return parseInt(value) + 1;
});
hbs.registerHelper("sign", function(value, options)
{
  if (value < 4) {
    return "+"
  } else if (value < 8) {
    return "-"
  } else if (value < 12) {
    return "*"
  }
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
