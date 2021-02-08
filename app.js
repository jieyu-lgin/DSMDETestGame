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
var system01 = require('./routes/system01');
var system02 = require('./routes/system02');
var system03 = require('./routes/system03');
var system04 = require('./routes/system04');
var system05 = require('./routes/system05');
var system06 = require('./routes/system06');
var system07 = require('./routes/system07');
var system08 = require('./routes/system08');
var system09 = require('./routes/system09');
var system10 = require('./routes/system10');
var system11 = require('./routes/system11');
var system12 = require('./routes/system12');
var system13 = require('./routes/system13');
var system14 = require('./routes/system14');
var system15 = require('./routes/system15');
var system16 = require('./routes/system16');
var system17 = require('./routes/system17');
var system18 = require('./routes/system18');
var system19 = require('./routes/system19');
var system20 = require('./routes/system20');
var system21 = require('./routes/system21');
var system22 = require('./routes/system22');
var system23 = require('./routes/system23');
var system24 = require('./routes/system24');
var system25 = require('./routes/system25');
var system26 = require('./routes/system26');
var system27 = require('./routes/system27');
var system28 = require('./routes/system28');
var system29 = require('./routes/system29');
var system30 = require('./routes/system30');
var achievement = require('./routes/achievement');
var achievement2 = require('./routes/achievement2');
var achievement3 = require('./routes/achievement3');
var new119090501 = require('./routes/new119090501');
var new119090601 = require('./routes/new119090601');
var new119090701 = require('./routes/new119090701');
var new119090801 = require('./routes/new119090801');
var new119091701 = require('./routes/new119091701');
var new120091701 = require('./routes/new120091701');
var new120091702 = require('./routes/new120091702');
var new120091703 = require('./routes/new120091703');
var new120091704 = require('./routes/new120091704');
var new120091705 = require('./routes/new120091705');
var new120091706 = require('./routes/new120091706');
var new120091707 = require('./routes/new120091707');
var new120091708 = require('./routes/new120091708');
var new119091801 = require('./routes/new119091801');
var new119092401 = require('./routes/new119092401');
var new119093001 = require('./routes/new119093001');
var new119101101 = require('./routes/new119101101');
var new119103101 = require('./routes/new119103101');
var new119110601 = require('./routes/new119110601');
var new119120201 = require('./routes/new119120201');
var new119121901 = require('./routes/new119121901');
var new119123001 = require('./routes/new119123001');
var new120010701 = require('./routes/new120010701');
var new120011101 = require('./routes/new120011101');
var new120011102 = require('./routes/new120011102');
var new120011103 = require('./routes/new120011103');
var new120011104 = require('./routes/new120011104');
var new121020801 = require('./routes/new121020801');
var new121020802 = require('./routes/new121020802');
var newTianjin190908 = require('./routes/newTianjin190908');
var newTianjin191001 = require('./routes/newTianjin191001');
var newTianjin191002 = require('./routes/newTianjin191002');
var familyEducation = require('./routes/familyEducation');
var text1 = require('./routes/text1')
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
app.use('/system01', system01);
app.use('/system02', system02);
app.use('/system03', system03);
app.use('/system04', system04);
app.use('/system05', system05);
app.use('/system06', system06);
app.use('/system07', system07);
app.use('/system08', system08);
app.use('/system09', system09);
app.use('/system10', system10);
app.use('/system11', system11);
app.use('/system12', system12);
app.use('/system13', system13);
app.use('/system14', system14);
app.use('/system15', system15);
app.use('/system16', system16);
app.use('/system17', system17);
app.use('/system18', system18);
app.use('/system19', system19);
app.use('/system20', system20);
app.use('/system21', system21);
app.use('/system22', system22);
app.use('/system23', system23);
app.use('/system24', system24);
app.use('/system25', system25);
app.use('/system26', system26);
app.use('/system27', system27);
app.use('/system28', system28);
app.use('/system29', system29);
app.use('/system30', system30);
app.use('/system', system);
app.use('/achievement', achievement);
app.use('/achievement2', achievement2);
app.use('/achievement3', achievement3);
app.use('/new119090501', new119090501);
app.use('/new119090601', new119090601);
app.use('/new119090701', new119090701);
app.use('/new119090801', new119090801);
app.use('/new119091701', new119091701);
app.use('/new120091701', new120091701);
app.use('/new120091702', new120091702);
app.use('/new120091703', new120091703);
app.use('/new120091704', new120091704);
app.use('/new120091705', new120091705);
app.use('/new120091706', new120091706);
app.use('/new120091707', new120091707);
app.use('/new120091708', new120091708);
app.use('/new119091801', new119091801);
app.use('/new119092401', new119092401);
app.use('/new119093001', new119093001);
app.use('/new119101101', new119101101);
app.use('/new119103101', new119103101);
app.use('/new119110601', new119110601);
app.use('/new119120201', new119120201);
app.use('/new119121901', new119121901);
app.use('/new119123001', new119123001);
app.use('/new120010701', new120010701);
app.use('/new120011101', new120011101);
app.use('/new120011102', new120011102);
app.use('/new120011103', new120011103);
app.use('/new120011104', new120011104);
app.use('/new121020801', new121020801);
app.use('/new121020802', new121020802);
app.use('/MP_verify_yrjNz0FgoaWFaScJ.txt',text1)
app.use('/newTianjin190908', newTianjin190908);
app.use('/newTianjin191001', newTianjin191001);
app.use('/newTianjin191002', newTianjin191002);
app.use('/familyEducation', familyEducation);

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
