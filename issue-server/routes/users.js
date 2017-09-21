var express = require('express');
var router = express.Router();
let usersController = require('../controller/users.js');

router.get('/',function(req,res,next){
  res.send('ok');
})
router.post('/login', usersController.login);

module.exports = router;
