$(document).ready(function () {

  function is_mobile(){
    return $(window).width() < 768;
  }

  function is_tablet(){
    return (($(window).width() > 768) && ($(window).width() < 992));
  }

  function is_desktop(){
    return $(window).width() > 992;
  }

  $('.navbar-toggle').sidr({
    name: 'sidr-main',
    source: '#slidemenu',
    onOpen: function(){
      $('.navbar-fixed-top').animate({left: ($(window).width < 610 ) ? "369px" : "512px" }, 200);
    },
    onClose: function(){
      $('.navbar-fixed-top').animate({left: "0"}, 200);
    }
  });

  $('.overlay').click(function(){
    $.sidr('close', 'sidr-main');
  });

  $('.sidr a').click(function(){
    $.sidr('close', 'sidr-main');
  });

  $('#page-content, .navbar-brand').click(function(){
    if ($('.page-content-overlay').is(':visible'))
      $('.page-content-overlay').hide();
  });

  $('.dropdown').click(function(){
    if ($('.page-content-overlay').is(':visible'))
      $('.page-content-overlay').hide();
    else
      $('.page-content-overlay').show();
  });

  url_hash = ($(location).attr('hash')) ? $(location).attr('hash') : '#home';
  $('.navbar-nav li').removeClass('active');
  $('.navbar a[href$="' + url_hash + '"]').parent('li').addClass('active'); 

  // Scroll
  $('a[href*=#]').bind("click", function(e){
      // $('.page-content-overlay').hide();
      var anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top - $('.navbar-fixed-top').height()
      }, 1000);
      e.preventDefault();
  });

  $('.sidr-class-dropdown-menu li a').click(function(){
    if (!is_desktop()) {
      var type_bike = $(this).text();
      console.log(type_bike);
      $('.navbar-header h2').text(type_bike);
    };
  });

  // $(window).scroll(function(){
  //     $(".page").each(function () {
  //       var window_top = $(window).scrollTop();
  //       var page_top = $(this).offset().top;
  //       var page_1 = $(this).attr('id');
  //         if (window_top > page_top - 120){
  //             $('.navbar-nav').find('li').removeClass('active');
  //             $('.navbar-nav').find('li a[class="'+page_1+'"]').addClass('active');
  //         }
  //         else{
  //             $('.navbar-nav').find('li[class="'+page_1+'"]').removeClass('active');
  //             };
  //     });
  // });
  
});