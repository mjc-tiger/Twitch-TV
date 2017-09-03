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
      $.getJSON(streamURL, function(data){
        var game, status;
        if (data.stream === null){
          game ="offline";
          status = "OFFLINE";
        } else if (data.stream === undefined){
          game = "Account closed or does not exist";
          status = "OFFLINE";
        } else {
          game = data.stream.game;
          status = "ONLINE";
        };
        // console.log(game);
        var channelURL = "https://wind-bow.gomix.me/twitch-api/channels/" + followers[i] + "?callback=?";
        $.getJSON(channelURL, function(data){
          
          //logo's definition 
          var logo;
          if (data.logo != null){
            logo = data.logo;
          } else {
            logo = "https://www.agrolok.pl/Content/img/empty_photo.png";
          }
          console.log(logo);

          //name's definition
          var name;
          if (data.display_name !=null){
            name = data.display_name;
          } else {
            name = followers[i];
          }
          // console.log(name);

          // status and description's definition
          var description;
          if (status === "ONLINE"){
            description = game + ': ' + data.status;
          } else {
            description = "offline";
          }
          // console.log(description);
          var website = "<div class='main-twitchTV'>"+
          "<div class='mtTV-left'>"+
            "<img src='"+logo+"'>"+
            '<h2><a href="' + data.url + '" target="_blank">'+name+'</a></h2>'+
            "<p>"+description+"</p>"+
          "</div>"+
          "<div class='mtTV-right'>"+
            "<h2>"+status+"</h2>"+
          "</div>"+
          "<div style='clear:both;'></div><hr></div>";

          status === "ONLINE" ? $(".main").prepend(website) : $(".main").append(website);




        });
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
