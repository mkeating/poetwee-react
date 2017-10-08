const twit = require('twit');
const config = require('./config.js');


const Twitter = new twit(config);

exports.getTweets = async (req, res) => {
	



	const tweets = await //function that get tweets
	return tweets;
}
