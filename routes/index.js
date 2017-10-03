var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'This isnt an endpoint' });
});

router.post('/get-tweets', function(req, res, next){
	let results = [
		['word 1 tweet 1','word 1 tweet 2', 'word 1 tweet 3', 'word 1 tweet 4' ]
		/*['word 2 tweet 1','word 2 tweet 2', 'word 2 tweet 3', 'word 2 tweet 4' ],
		['word 3 tweet 1','word 3 tweet 2', 'word 3 tweet 3', 'word 3 tweet 4' ],
		['word 4 tweet 1','word 4 tweet 2', 'word 4 tweet 3', 'word 4 tweet 4' ]*/
	]
  res.json(results);
});

module.exports = router;
