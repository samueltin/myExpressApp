var express = require('express');
var router = express.Router();
const dotenv = require('dotenv');
dotenv.config();

var executionEnv=process.env.EXECUTION_ENV

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', executionEnv:  executionEnv});
});

module.exports = router;
