var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";

var Twitter = require('twitter');

var request = require("request");

var client = new Twitter({
  consumer_key: '4sVjJubT60NfyG57jyb5RwPi4',
  consumer_secret: 'm3oZZkVX87h63ENU18t0IIOATbyxNq0RvhHsN6F6O0gLWhkErU',
  access_token_key: '	41306505-vxsAFqaCfF1QRMyRIl54laYlFPgsPhGIz3apMAWSD',
  access_token_secret: '	rC09S1YcWl5drJLFFPvmYmL3WArmp6vt5pi1NLLstzTxd'
});

var params = {screen_name: 'lllA_ronlll'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

var spotify = require('spotify');

spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }

var nodeArgs = process.argv;

var movieName = "";

for (var i = 2; i < nodeArgs.length; i++) {

  if (i > 2 && i < nodeArgs.length) {

    movieName = movieName + "+" + nodeArgs[i];

  }

  else {

    movieName += nodeArgs[i];

  }
}


console.log(queryUrl);

request(queryUrl, function(error, response, body) {


  if (!error && response.statusCode === 200) {


    console.log("Release Year: " + JSON.parse(body).Year);
  }
});
