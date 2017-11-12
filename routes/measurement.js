var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('measurement', { title: 'DSMDE 天穹工程' });
});

module.exports = router;
