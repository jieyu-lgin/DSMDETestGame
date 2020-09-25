var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('familyEducation', { title: '家庭智慧成长系列' });
});

module.exports = router;
