$(document).ready(function() {
  //create variables
  var followers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "comster404", "brunofin"];
  // get URL for fCC
  var url = "https://wind-bow.glitch.me/twitch-api/streams/freecodecamp";
  //check status ONLINE/OFFLINE
  $.getJSON(url, function(data) {
    if (data.stream === null) {
      $("#status").html("OFFLINE");
    } else {
      $("#status").html("ONLINE");
    }
  });
  //check followers for fCC
  var urlFollower = "https://wind-bow.glitch.me/twitch-api/users/freecodecamp/follows/channels";
  $.getJSON(urlFollower, function(data2) {
    for (var i = 0; i < data2.follows.length; i++) {
      var name = data2.follows[i].channel.display_name;
      var logo = data2.follows[i].channel.logo;
      followers.push(name);
    }
    for (var i = 0; i < followers.length; i++) {
      $(".main-twitchTV").append("<h2>" + followers[i] + "</h2>");
    }



    // for (var i=0;i<followers.length;i++){
    //   urlStatus = "https://wind-bow.glitch.me/twitch-api/streams/"+followers[i];
    //   $.getJSON(urlStatus, function(data3){
    //     if (data3.stream != null){
    //       var logo = data3.stream.channel.logo;
    //       var name = data3.stream.channel.display_name;
    //       var status = data3.stream.channel.status;
    //       $(".mtTV-right").prepend("<img src='"+logo+"'><h2>"+name+"</h2>");
    //     } else {
    //       var offLogo = "https://cdn3.iconfinder.com/data/icons/wifi-2/460/no-conection-512.png";
    //       $(".mtTV-right").append("<img src='"+offLogo+"'>");
    //     }
    //   })
    // }

  });
  $("#scroll-btn").click(function() {
    $("body").animate({
      scrollTop: 0
    }, "slow");
    return false;
  });
  $(window).scroll(function(){
    if($(this).scrollTop()>300) {$("#scroll-btn").fadeIn();}
    else {$("#scroll-btn").fadeOut();}
  });


});
