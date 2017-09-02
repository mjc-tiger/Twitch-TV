$(document).ready(function() {
  //create variables
  var followers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "comster404", "brunofin","kupłaqó"];
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

  // --------------- NEW CODE -----------------------------------
  var urlFollower = "https://wind-bow.glitch.me/twitch-api/users/freecodecamp/follows/channels";
  $.getJSON(urlFollower, function(data2) {
    for (var i = 0; i < data2.follows.length; i++) {
      var name = data2.follows[i].channel.display_name;
      followers.push(name);
    }
    console.log(followers);
    for (var i=0; i<followers.length; i++){
      var url2 = "https://wind-bow.glitch.me/twitch-api/streams/"+followers[i]+"/?callback=?";
      $.getJSON(url2).done(function(data3){
        var logo;
        var status;
        var name;
        if (data3.error){
          logo = "https://vignette1.wikia.nocookie.net/nationlife/images/c/c0/No-sign.png/revision/latest?cb=20110628223434";
          name = data3.message;
          status = data3.error;
          

          $(".main-twitchTV").prepend("<div class='main-twitchTV'>"+
          "<div class='mtTV-left'>"+
            "<img src='"+logo+"'>"+
            "<h2>"+name+"</h2>"+
            "<p>"+status+"</p>"+
          "</div>"+
          "<div class='mtTV-right'>"+
            "<h2>"+status+"</h2>"+
          "</div>"+
          "<div style='clear:both;'></div><hr></div>");
        }
        console.log(data3);
      });
    }

  // --------------- THE END OF NEW CODE ------------------------



  });

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
