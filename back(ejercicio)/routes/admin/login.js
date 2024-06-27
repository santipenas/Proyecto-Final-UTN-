var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render ('admin/login', { //view/admin/login.hbs
      layout: 'admin/layout'  //view/admin/layout.hbs
});
});

module.exports = router;
