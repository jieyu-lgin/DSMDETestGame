var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var video = require('./routes/video');
var about = require('./routes/about');
var news = require('./routes/news');
var team = require('./routes/team');
var system = require('./routes/system');
var achievement = require('./routes/achievement');
var sky = require('./routes/sky');
var base = require('./routes/base');
var train = require('./routes/train');
var new0 = require('./routes/new0');
var contact = require('./routes/contact');
var premeasure = require('./routes/premeasure');
var measurement = require('./routes/measurement');
var result = require('./routes/result');
var users = require('./routes/users');

var app = express();

var express = require('express')
, routes = require('./routes')
, user = require('./routes')
, http = require('http')
, path = require('path')
, ejs = require('ejs');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html',ejs.__express);
app.set('view engine','html');
//app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('node_modules'));


app.use('/', index);
app.use('/video', video);
app.use('/about', about);
app.use('/news', news);
app.use('/team', team);
app.use('/system', system);
app.use('/achievement', achievement);
app.use('/sky', sky);
app.use('/base', base);
app.use('/train', train);
app.use('/new0', new0);
app.use('/contact', contact);
app.use('/premeasure', premeasure);
app.use('/measurement', measurement);
app.use('/result', result);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
