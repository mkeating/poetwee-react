const twit = require('twit');
const config = require('./config.js');


const Twitter = new twit(config);

exports.getTweets = async (req, res) => {

	//get user input
	const searchQuery = req.body.value;

	//split into individual words
	const searchWords = searchQuery.split(' ').map((word) => ` ${word} `);

	//function that searches twitter for a word, returning 10 results. this is run for each word in the user input
	 searchTwitter = (word) => {

	 	let thisWord = [];

	 	return new Promise ((resolve, reject) => {
				
			Twitter.get('search/tweets', { q: word, count: 10, truncated: false, retweeted: false }, function(err, data, response) {

				if(err) {
					//TODO: return this to front end
					console.log('error!')
					reject(err);
					return;
				}

				if(response.statusCode == 200) {

					//iterate over all results
					for(let status of data.statuses) {
						//for now, english only
						//ignore retweets and truncated tweets
						if(!status.is_quote_status
							&& !status.retweeted
							&& !status.truncated
							&& status.lang == 'en') {
								
								const screennames = /\B@[a-z0-9_:-]+/gi;
								const hashtags = /(#[a-z0-9][a-z0-9\-_]*)/gi;
								const links = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi;

								//get the tweet text, remove: links, screennames, 'RT', hashtags. 
								
								//add strong tags to the search word, and spaces on each side to prevent errors with subwords like "a" and "to" and "can"
								let cleanStatus = ' ' + status.text.replace(links, '')
									.replace(screennames, '')
									.replace('RT', '')
									.replace(hashtags, '')
									/*.replace(word, `<strong>${word}</strong>`) + ' '*/;

								//add to results
								thisWord.push(cleanStatus);			
						}
					}
					resolve(thisWord);	
				}
			}); //end twitter.get
		});
	}   // end searchTwitter
 
	Promise.all(searchWords.map(element => {
		return searchTwitter(element); 
	}))
	.then(results => {
		res.json(results);
	});
}
