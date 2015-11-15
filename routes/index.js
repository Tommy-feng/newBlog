/*var express = require('express');
var router = express.Router();

/!* GET home page. *!/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'fengzheqi' });
});

module.exports = router(app);*/

module.exports = function(app) {
  /!* GET home page. *!/
  app.get('/', function(req, res, next) {
    res.render('index', { title: 'fengzheqi' });
  });
}
