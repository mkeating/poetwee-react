const express = require('express');
const router = express.Router();

const TwitterController = require('../controllers/TwitterController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'This isnt an endpoint' });
});


router.post('/get-tweets', TwitterController.getTweets);

module.exports = router;
