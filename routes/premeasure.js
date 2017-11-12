var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('premeasure', { title: 'DSMDE 天穹工程' });
});

module.exports = router;