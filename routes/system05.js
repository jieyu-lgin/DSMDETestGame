var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('system05', { title: '加盟系统' });
});

module.exports = router;
