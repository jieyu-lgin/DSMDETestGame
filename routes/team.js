var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('team', { title: '师资团队' });
});

module.exports = router;
