$(document).ready(function(){
  //create variables
  var followers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "comster404", "brunofin"];
  // get URL for fCC
  var url = "https://wind-bow.glitch.me/twitch-api/streams/freecodecamp";
  //check status ONLINE/OFFLINE
  $.getJSON(url, function(data){
    if (data.stream === null){
      $("#status").html("OFFLINE");
    } else {
      $("#status").html("ONLINE");
    }
  });
  //check followers for fCC
  var urlFollower = "https://wind-bow.glitch.me/twitch-api/users/freecodecamp/follows/channels";
  $.getJSON(urlFollower, function(data2){
    for (var i=0;i<data2.follows.length;i++){
      var name = data2.follows[i].channel.name;
      followers.push(name);
    }
    console.log(followers);
    for (var i=0;i<followers.length;i++){
      urlStatus = "https://wind-bow.glitch.me/twitch-api/streams/"+followers[i];
      $.getJSON(urlStatus, function(data3){
        if (data3.stream === null){
          $("body").append("<h2>tak!</h2>");
        } else {
          $("body").append("<h3>nie!</h3>");
        }
      })
    }
  });
});
