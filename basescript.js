$(function () {
$(window).on("scroll", function () {
  if ($(this).scrollTop() > 300) {
    $("#nav").fadeIn("slow");
    $("#SCROLL_DOWN").addClass("fadeOut");
  } else {
    $("#nav").fadeOut("slow");
    $("#SCROLL_DOWN").removeClass("fadeOut");
  }
});

});

$(function(){
  $("#SCROLL_DOWN").click(function(){
    var speed = 400;
    var href=$(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({
      scrollTop:position
    }, speed, 'swing');
    return false;
  });
});

$(function(){
  $("#footer").click(function(){
    $('body,html').animate({
      scrollTop: 0,
    },500);
  });
});

$(function(){
  $("#toggle_nav_sp").click(function(){
    $(this).toggleClass('open');
    $("#nav_menu_sp ").toggleClass('open');
  });
});

$(function(){
    $('#main_visual_container ul img')
      .bind( 'touchstart', function(){
        $( this ).addClass( 'touch' );
    }).bind( 'touchend', function(){
        $( this ).removeClass( 'touch' );
    });
});

$(function() {
  var h = $(window).height();

  $('#wrap').css({
    "display": "none"
  });
  $('#loader-bg ,#loader').height(h).css('display','block');
  });

  $(window).load(function () { //全ての読み込みが完了したら実行
    $('#loader-bg').delay(900).fadeOut(800);
    $('#loader').delay(600).fadeOut(300);
    $('#wrap').css({
  /*    "opacity": "1",*/
      "display": "block"
    });
  });

$(function() {
  $('.effect').one('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if(isInView){
      $(this).stop().addClass('move');
    }
    else{
      $(this).stop().removeClass('move');
    }
  });
});

/*  $(function(){
    var l = Math.floor($(window).width() - $("#nav_menu_pc_logo_inner").width() / 2);
    $("#nav_menu_pc_logo_inner").css({
      "left": l
    });
  });*/
/*$(function(){
  $("#glayLayer").click(function(){
    $(this).hide();
    $("#overLayer").hide();
    $("#overLayer").empty();
  });
  $("#overLayer").click(function(){
    $("#glayLayer").hide();
    $("this").hide();
    $("#overLayer").empty();
  });
  $("a.modal").click(function(){
    $("#glayLayer").show();
    $("#overLayer").show().append("<p id='overLayer_main'>"+$(this).attr("data-target")+"</p>");
    $("#overLayer").append("<img src='"+$(this).attr("href")+"'>");

    return false;
  });
  $(".modal_box img.close").click(function(){
    $("#glayLayer").hide();
    $("#overLayer").hide();
    $("#overLayer").empty();
  });
});*/
