var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('achievement3', { title: '研究成果' });
});

module.exports = router;
