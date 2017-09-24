var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  let results = [{
  	id: 1, 
  	username: 'Lolman300'
  },{
  	id: 2, 
  	username: 'dickheadFucker'
  }
]
  res.json(results);
});

module.exports = router;
