$(document).ready( function() {

  $.backstretch('images/foto-filter-4.png', {speed: 500});
  
  var bg = { 
    'home': 'images/foto-filter-4.png',
    'about': 'images/foto-filter-3.png',
    'gallery': 'images/foto-filter-2.png',
    'contact': 'images/foto-filter-1.png'
  }

  var bg_small = {
    'home': 'images/small-foto-filter-4.png',
    'about': 'images/small-foto-filter-3.png',
    'gallery': 'images/small-foto-filter-2.png',
    'contact': 'images/small-foto-filter-1.png'
  }

  if ($(window).width() <= 320) {
    $('.page').each( function() {
      var page_id = $(this).attr('id');
      if (page_id != 'gallery')
        $('<img src="' + bg_small[page_id] + '" class="page-picture" />').prependTo($(this));
    });
  }

  url_hash = ($(location).attr('hash')) ? $(location).attr('hash') : '#home';
  $('.navbar-nav li').removeClass('active');
  $('.navbar a[href$="' + url_hash + '"]').parent('li').addClass('active');          

  // Scroll
  var $container = $('.content-center');
  $container.perfectScrollbar({suppressScrollX: true});

  function addHandler(object, event, handler) {
    if (object.addEventListener) {
      object.addEventListener(event, handler, false);
    }
    else if (object.attachEvent) {
      object.attachEvent('on' + event, handler);
    }
  }

  addHandler(window, 'DOMMouseScroll', wheel);
  addHandler(window, 'mousewheel', wheel);
  addHandler(document, 'mousewheel', wheel);

  function wheel(event) {
    var delta;
    event = event || window.event;

    if (event.wheelDelta) {
      delta = event.wheelDelta / 120;

      if (window.opera) delta = -delta;
    }
    else if (event.detail) {
      delta = -event.detail / 3;
    }

    if (event.preventDefault) event.preventDefault();
    event.returnValue = false;

    // capture scroll event outside of content container
    if (delta > 0)
      $container.scrollTo('-=100px', 0);
    else
      $container.scrollTo('+=100px', 0)
  }

  $('.page').each( function() {
    if ($(this).height() < $container.height()) {
      var page_padding = ($container.height() - $(this).height())/2;
      $(this).css({
        'padding-top': (page_padding > 50) ? page_padding : 50,
        'padding-bottom': page_padding
      });
    } else {
      $(this).css({'padding-top': '50px'});
    }
  });

  $('.navbar a[href^="#"]').click( function() {
    var target = $(this).attr('href');
    $container.scrollTo(target ,{duration: 400, offsetTop : '1000'});
    return false;
  });

  var lastId,
  topMenu = $('.navbar-nav'),
  // All list items
  menuItems = topMenu.find('a'),
  // Anchors corresponding to menu items
  scrollItems = menuItems.map( function() {
    var item = $($(this).attr('href'));
    if (item.length) { return item; }
  });

  $container.scroll( function() {
      // Get container scroll position
      var fromTop = $(this).height()/2;
      // Get id of current scroll item
      var cur = scrollItems.map( function() {
      if ($(this).position().top < fromTop)
        return this;
      });
      // Get the id of the current element
      cur = cur[cur.length-1];
      var id = cur && cur.length ? cur[0].id : 'home';

      if (lastId !== id) {
        lastId = id;

        if($(window).width() > 320) 
          $.backstretch(bg[id]);
        
        if ($(window).width() > 992) {
          if (id != 'home')
            $('.bg-text').fadeOut('fast');
          else
            $('.bg-text').fadeIn('fast');
        }

        // Set/remove active class
        menuItems
          .parent().removeClass('active')
          .end().filter('[href=#' + id + ']').parent().addClass('active');
      }  
  });

  $(window).resize( function() {

    var container_height = $(window).height() - $('.navbar-fixed-top').height() - $('#footer').height();
    $('.page').each( function() {
      if ($(this).height() < container_height) {
        var page_padding = ($container.height() - $(this).height())/2;
        $(this).css({
          'padding-top': (page_padding > 50) ? page_padding : 50 ,
          'padding-bottom' : page_padding
        });
      } else {
        $(this).css({'padding-top' : '50px'});
      }
    });

    if ($('.page #footer').length == 0 && $(window).width() <= 320) 
      $('#footer').clone().appendTo($('.content-center .page:last'));
    else if ($('.page #footer').length > 0 && $(window).width() > 320)
      $('.page #footer').remove();

    if ($('.page-picture').length == 0 && $(window).width() <= 320) {
      $('.page:not(#gallery)').each( function() {
        var page_id = $(this).attr('id');
        $('<img src="' + bg[page_id] + '" class="page-picture" />').prependTo($(this));
      });
    } else if ($('.page-picture').length > 0 && $(window).width() > 320) {
      $('.page-picture').remove();
    }

  });

  $(window).resize();

  // Accordion 
  $('.panel-collapse').on('show.bs.collapse', function() {
     $(this).siblings('.panel-heading').find('.fa').removeClass("fa-caret-right").addClass("fa-caret-down");
  });

  $('.panel-collapse').on('hide.bs.collapse', function() {
     $(this).siblings('.panel-heading').find('.fa').removeClass("fa-caret-down").addClass("fa-caret-right");
  });

  // Gallery
  $('.preview-img').each( function() {
    $(this).parents('.popup-gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1],
        tCounter: 'foto %curr% van %total%'
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function(item) {
          return item.el.attr('title');
        }
      }
    });
  });

});