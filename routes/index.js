var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Node Twitter LiveStream' });
});

router.get('/counter', function(req, res) {
  res.render('counter', { title: 'Node Twitter Dashboard' });
});

module.exports = router;
