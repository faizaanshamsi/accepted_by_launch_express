var socket = io.connect('http://localhost:4000');

function image(tweet) {
  var result;
  if ( tweet["extended_entities"] !== undefined && tweet["extended_entities"]["media"][0]["media_url"] !== undefined )
    {
      var imageUrl = tweet["extended_entities"]["media"][0]["media_url"]
      var imageTag = "<img src=\"" + imageUrl + "\">     "
      result = "\n" + imageTag
    }
  else
    {
      result = ""
    }
  return result;
}

function addTweetTextToList(tweet) {
  $('.container').prepend(
    "<div class='row'>" +
       "<div class='panel panel-primary'>" +
         "<div class='panel panel-heading'>" + tweet["user"]["name"] + "</div>" +
         "<div class='panel panel-body'>" + image(tweet) + tweet["text"] + "</div>" +
       "</div>" +
     "</div>"
    );
  // $('.tweets ul').append('<li>' + constructListItem(tweet) + '</li>');
};

var count = 0;
socket.on('connect', function () {
  socket.on('acceptanceTweet', function(tweet) {
    count++;
    var s = "Number of Tweets: " + count;
    $('.counter').text(s);
    addTweetTextToList(tweet);
    console.log(tweet);
  });
});
