var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/evaluate', function(req, res, next) {
  res.render('evaluate', { title: 'Aber sicierto' });
});


module.exports = router;
