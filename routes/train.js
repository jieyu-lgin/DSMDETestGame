var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('train', { title: '新闻详情' });
});

module.exports = router;
