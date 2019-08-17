var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('video', { title: '我们的活动' });
});

module.exports = router;
