$(document).ready(function() {
  //An array from "Use the Twitchtv JSON API project (fCC)
  var followers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "comster404", "brunofin","kółeczko"];

  //aditional Twitchtv users - fCC followers
  var followersURL = "https://wind-bow.glitch.me/twitch-api/users/freecodecamp/follows/channels";
  $.getJSON(followersURL, function(data) {
    for (let i = 0; i < data.follows.length; i++) {
      var name = data.follows[i].channel.display_name;
      followers.push(name);
    }
    console.log(followers);
    for (let i=0; i<followers.length; i++){
      var streamURL = 'https://wind-bow.gomix.me/twitch-api/streams/' + followers[i] + '?callback=?';
      $.getJSON(streamURL, function(data2){
        var game, status;
        if (data2.stream === null){
          game ="Offline";
          status = "offline";
        } else if (data2.stream === undefined){
          game = "Account closed or does not exist";
          status = "offline";
        } else {
          game = data2.stream.game;
          status = "online";
        };
        console.log(game);
      });
      

    };





    
  });
    



    
          
          // $(".main-twitchTV").prepend("<div class='main-twitchTV'>"+
          // "<div class='mtTV-left'>"+
          //   "<img src='"+logo+"'>"+
          //   "<h2>"+name+"</h2>"+
          //   "<p>"+status+"</p>"+
          // "</div>"+
          // "<div class='mtTV-right'>"+
          //   "<h2>OFFLINE</h2>"+
          // "</div>"+
          // "<div style='clear:both;'></div><hr></div>");
        
        // console.log(data3);
  

  // Initialize the scroll button
  $("#scroll-btn").click(function() {
    $("body").animate({
      scrollTop: 0
    }, "slow");
    return false;
  });

  // Show or hide scroll button function
  $(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
      $("#scroll-btn").fadeIn();
    } else {
      $("#scroll-btn").fadeOut();
    }

  });

  // fix the details container when scrolled
  $(window).scroll(function () {
            if ($(window).scrollTop() > 300) {
                $(".details").addClass("fixed");
            } else {
                $(".details").removeClass("fixed");
            }
        });


});
