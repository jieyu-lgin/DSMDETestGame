var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('new120091705', { title: '新闻播报' });
});

module.exports = router;