console.log("The bot is running");
var Twit = require('twit');
var config = require('./config')
var T = new Twit(config);

//setInterval(TweetIt, 1000*60);
var stream = T.stream('user');
 
stream.on('follow', followed);

function followed(event){
	console.log('following');
	var name = event.source.name;
	var screenName = event.source.screen_name;
	TweetIt('@' + screenName + ' Thanks for following buddy'); 
} 




function TweetIt(txt){
	
 var tweet = {
 	status: txt
 }

T.post('statuses/update', tweet, tweeted);

function tweeted(err, data, response){
	if(err){
		console.log("Something went wrong");
	} else{
		console.log("Done tweeting");
	}
}	
}


var params = {
	q: 'fortnite',
  	count: 5,
  	lang: 'en',
  	result_type: 'popular'
}

T.get('search/tweets', params , getdata);

function getdata(err, data, response) {
  var tweets  = data.statuses;
  for(var i=0;i<tweets.length;i++)
  	console.log(tweets[i].text);
};
