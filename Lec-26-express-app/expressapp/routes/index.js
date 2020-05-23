var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Node' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Node' });
});

module.exports = router;
