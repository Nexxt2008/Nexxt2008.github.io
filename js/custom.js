$(document).ready(function () {

  $('a.brand.batavus').sidr({
    name: 'batavus',
    source: function(name) {
      return '<div class="sidr-brand"><img src="images/x.png" class="close">' +
                '<div class="brand-content">' +
                  '<img src="images/desktop/logo\'s merken/batavus logo desktop.png">' +
                  '<div class="brand-menu">' +
                    '<ul>' +
                      '<li><a href="#stadsfietsen-batavus">Stadsfietsen</a></li>' +
                      '<li><a href="#elektrische-fietsen-batavus">Elektrische fietsen</a></li>' +
                      '<li><a href="#kinderfietsen-batavus">Kinderfietsen</a></li>' +
                      '<li class="ext-link"><a href="#" target="_blank"><i class="fa fa-external-link"></i>Batavus</a></li>' +
                    '</ul>' +
                  '</div>' +
                '</div>' +
              '</div>';
    },
    side: 'right'
  });

  $('a.brand.bfk').sidr({
    name: 'bfk',
    source: function(name) {
      return '<div class="sidr-brand"><img src="images/x.png" class="close">' +
                '<div class="brand-content">' +
                  '<img src="images/desktop/logo\'s merken/bfk logo desktop.png">' +
                  '<div class="brand-menu">' +
                    '<ul>' +
                      '<li><a href="#kinderfietsen-bfk">Kinderfietsen</a></li>' +
                      '<li class="ext-link"><a href="#" target="_blank"><i class="fa fa-external-link"></i>BFK</a></li>' +
                    '</ul>' +
                  '</div>' +
                '</div>' +
              '</div>';
    },
    side: 'right'
  });

  $('a.brand.kettler').sidr({
    name: 'kettler',
    source: function(name) {
      return '<div class="sidr-brand"><img src="images/x.png" class="close">' +
                '<div class="brand-content">' +
                  '<img src="images/desktop/logo\'s merken/kettler logo desktop.png">' +
                  '<div class="brand-menu">' +
                    '<ul>' +
                      '<li><a href="#hometrainers-kettler">Hometrainers</a></li>' +
                      '<li class="ext-link"><a href="#" target="_blank"><i class="fa fa-external-link"></i>Kettler</a></li>' +
                    '</ul>' +
                  '</div>' +
                '</div>' +
              '</div>';
    },
    side: 'right'
  });

  $('a.brand.koga-miyata').sidr({
    name: 'koga-miyata',
    source: function(name) {
      return '<div class="sidr-brand"><img src="images/x.png" class="close">' +
                '<div class="brand-content">' +
                  '<img src="images/desktop/logo\'s merken/koga logo desktop.png">' +
                  '<div class="brand-menu">' +
                    '<ul>' +
                      '<li><a href="#racefietsen-koga-miyata">Racefietsen</a></li>' +
                      '<li><a href="#mountbikes-koga-miyata">Mountbikes</a></li>' +
                      '<li><a href="#stadsfietsen-koga-miyata">Stadsfietsen</a></li>' +
                      '<li><a href="#elektrische-fietsen-koga-miyata">Elektrische fietsen</a></li>' +
                      '<li class="ext-link"><a href="#" target="_blank"><i class="fa fa-external-link"></i> Koga Miyata</a></li>' +
                    '</ul>' +
                  '</div>' +
                '</div>' +
              '</div>';
    },
    side: 'right'
  });

  $('a.brand.ridley').sidr({
    name: 'ridley',
    source: function(name) {
      return '<div class="sidr-brand"><img src="images/x.png" class="close">' +
                '<div class="brand-content">' +
                  '<img src="images/desktop/logo\'s merken/ridley logo desktop.png">' +
                  '<div class="brand-menu">' +
                    '<ul>' +
                      '<li><a href="#racefietsen-ridley">Racefietsen</a></li>' +
                      '<li><a href="#mountbikes-ridley">Mountbikes</a></li>' +
                      '<li class="ext-link"><a href="#" target="_blank"><i class="fa fa-external-link"></i>Ridley</a></li>' +
                    '</ul>' +
                  '</div>' +
                '</div>' +
              '</div>';
    },
    side: 'right'
  });

  $('a.brand.stevens').sidr({
    name: 'stevens',
    source: function(name) {
      return '<div class="sidr-brand"><img src="images/x.png" class="close">' +
                '<div class="brand-content">' +
                  '<img src="images/desktop/logo\'s merken/stevens logo desktop.png">' +
                  '<div class="brand-menu">' +
                    '<ul>' +
                      '<li><a href="#racefietsen-stevens">Racefietsen</a></li>' +
                      '<li><a href="#mountbikes-stevens">Mountbikes</a></li>' +
                      '<li><a href="#stadsfietsen-stevens">Stadsfietsen</a></li>' +
                      '<li><a href="#elektrische-fietsen-stevens">Elektrische fietsen</a></li>' +
                      '<li class="ext-link"><a href="#" target="_blank"><i class="fa fa-external-link"></i>Stevens</a></li>' +
                    '</ul>' +
                  '</div>' +
                '</div>' +
              '</div>';
    },
    side: 'right'
  });

  $('a.brand.trek').sidr({
    name: 'trek',
    source: function(name) {
      return '<div class="sidr-brand"><img src="images/x.png" class="close">' +
                '<div class="brand-content">' +
                  '<img src="images/desktop/logo\'s merken/trek logo desktop.png">' +
                  '<div class="brand-menu">' +
                    '<ul>' +
                      '<li><a href="#racefietsen-trek">Racefietsen</a></li>' +
                      '<li><a href="#mountbikes-trek">Mountbikes</a></li>' +
                      '<li><a href="#stadsfietsen-trek">Stadsfietsen</a></li>' +
                      '<li><a href="#elektrische-fietsen-trek">Elektrische fietsen</a></li>' +
                      '<li><a href="#kinderfietsen-trek">Kinderfietsen</a></li>' +
                      '<li class="ext-link"><a href="http://www.trekbikes.com" target="_blank"><i class="fa fa-external-link"></i> www.trekbikes.com</a></li>' +
                    '</ul>' +
                  '</div>' +
                '</div>' +
              '</div>';
    },
    side: 'right'
  });

  $('.overlay, .close, .sidr a').click(function(){
    $.sidr('close', 'batavus');
    $.sidr('close', 'bfk');
    $.sidr('close', 'kettler');
    $.sidr('close', 'koga-miyata');
    $.sidr('close', 'ridley');
    $.sidr('close', 'stevens');
    $.sidr('close', 'trek');
  });

  function is_mobile(){
    return $(window).width() < 768;
  }

  function is_tablet(){
    return (($(window).width() > 768) && ($(window).width() < 992));
  }

  function is_desktop(){
    return $(window).width() > 992;
  }

  // Marks
    items_wrap = $('#mark .mark-items').outerWidth(true);
    item = $('#mark .mark-item').outerWidth(true);
    columns = Math.floor(items_wrap/item);
    w_columns = columns * item;
    padding = (Math.floor((items_wrap - w_columns) / 2) - 1);
    $('#mark .mark-items').css('padding', '0 ' + padding + 'px');

  // Popup
  if (!is_desktop()) {
    $('.type-bike').each(function(){
      if ($(this).find('.bike-block.descr').length > 0 && $(this).find('.bike-block.desktop-img').length > 0) {
        var src = $(this).find('.bike-block.desktop-img img').attr('src');
        $(this).find('.bike-block.descr .description p:last').append('<a href="' + src + '" class="visible-xs visible-sm image-popup"><i class="fa fa-camera"></i></a>');
      }
    });
  }

  $('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-img-mobile',
    image: {
      verticalFit: true
    }
    
  });

  // Side menu
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

  $('.overlay, .sidr a').click(function(){
    $.sidr('close', 'sidr-main');
  });

  // Dropdown
  $(document).click(function(event) {
    if ($('.page-content-overlay').is(':visible'))
      $('.page-content-overlay').hide();
    event.stopPropagation();
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
      var anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top - $('.navbar-fixed-top').height()
      }, 1000);
      e.preventDefault();
  });

  $('.sidr-class-dropdown-menu li a').click(function(){
    if (!is_desktop()) {
      var type_bike = $(this).text();
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