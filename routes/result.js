var express = require('express');
var url = require('url');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.query.score)
  res.render('result', { score: req.query.score, detail: req.query.detail });
});

module.exports = router;