var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('MP_verify_yrjNz0FgoaWFaScJ', { title: '关于我们' });
});

module.exports = router;
